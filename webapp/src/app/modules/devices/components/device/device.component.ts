import { Component, OnInit } from '@angular/core';
import { DevicesRepository } from '../../repositories/devices.service';
import { Device } from 'src/app/models/device';
import { ActivatedRoute } from '@angular/router';
import { DragEventListenerService } from '@clr/angular/utils/drag-and-drop/providers/drag-event-listener.service';

@Component({
  selector: 'app-device',
  templateUrl: './device.component.html',
  styleUrls: ['./device.component.scss']
})
export class DeviceComponent implements OnInit {

  open = true;
  device: Device;

  constructor(
    private route: ActivatedRoute,
    private deviceRepo: DevicesRepository
  ) { }

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');
    this.deviceRepo.GetById(id).subscribe(result => this.device = result);
  }

}
