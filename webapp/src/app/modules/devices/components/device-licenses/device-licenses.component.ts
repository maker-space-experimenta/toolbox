import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { DeviceLicense } from 'src/app/models/device-license';
import { Device } from 'src/app/models/device';
import { DevicesRepository } from '../../repositories/devices.service';

@Component({
  selector: 'app-device-licenses',
  templateUrl: './device-licenses.component.html',
  styleUrls: ['./device-licenses.component.scss']
})
export class DeviceLicensesComponent implements OnInit {

  licenses: BehaviorSubject<DeviceLicense[]> = new BehaviorSubject([]);
  devices: BehaviorSubject<Device[]> = new BehaviorSubject([]);


  constructor(
    private deviceRepo: DevicesRepository
  ) { }

  ngOnInit() {

    this.deviceRepo.GetAll().subscribe(result => {
      this.devices.next(result);
      this.loadLicenses();
    });


    
  }

  loadLicenses() {
    this.licenses.next([
      {
        Id: '05100953-b2cf-4b80-88f7-35e531951328',
        Date: new Date(),
        User: {
          Id: "babcff2d-d4de-4e0a-8c58-22ecd8127dd1",
          DisplayName: "Jonathan Günz",
          Approved: new Date(),
          ApprovedBy: null
        },
        Device: this.devices.value[0]
      }
    ]);
  }

}
