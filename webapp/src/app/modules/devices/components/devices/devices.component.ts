import { Component, OnInit } from '@angular/core';
import { Device } from 'src/app/models/device';
import { MenuService } from 'src/app/services/menu.service';
import { Router } from '@angular/router';
import { Observable, BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { DevicesRepository } from '../../repositories/devices.service';

@Component({
  selector: 'app-devices',
  templateUrl: './devices.component.html',
  styleUrls: ['./devices.component.scss']
})
export class DevicesComponent implements OnInit {

  devices: BehaviorSubject<Device[]> = new BehaviorSubject([]);

  constructor(
    private router: Router,
    private deviceRepo: DevicesRepository
  ) {

  }

  ngOnInit() {
    this.loadDevices();
  }

  loadDevices () {
    this.deviceRepo.GetAll().subscribe(result => this.devices.next(result));
  }

  rowClick(device: Device) {
    this.router.navigate(["devices", "details", device.id]);
  }

}
