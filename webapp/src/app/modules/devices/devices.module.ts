import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ClarityModule } from '@clr/angular';

import { CommonComponentsModule } from '../common-components/common-components.module';
import { I18nModule } from 'src/app/i18n/i18n.module';

import { DevicesComponent } from './components/devices/devices.component';
import { DeviceComponent } from './components/device/device.component';
import { DeviceLicensesComponent } from './components/device-licenses/device-licenses.component';
import { StorageComponent } from './components/storage/storage.component';


@NgModule({
  declarations: [
    DevicesComponent,
    DeviceComponent,
    DeviceLicensesComponent,
    StorageComponent
  ],
  imports: [
    CommonModule,
    CommonComponentsModule,
    ClarityModule,
    FormsModule,
    I18nModule
  ]
})
export class DevicesModule {

}
