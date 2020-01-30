import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DevicesComponent } from './components/devices/devices.component';
import { DevicesModuleRouting } from './devices.routing';
import { MenuService } from 'src/app/services/menu.service';
import { ClarityModule } from '@clr/angular';
import { FormsModule } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
import { Device } from 'src/app/models/device';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { CommonComponentsModule } from '../common-components/common-components.module';
import { DeviceComponent } from './components/device/device.component';
import { DeviceLicensesComponent } from './components/device-licenses/device-licenses.component';


@NgModule({
  declarations: [
    DevicesComponent,
    DeviceComponent,
    DeviceLicensesComponent
  ],
  imports: [
    CommonModule,
    DevicesModuleRouting,
    CommonComponentsModule,
    ClarityModule,
    FormsModule
  ]
})
export class DevicesModule {

}
