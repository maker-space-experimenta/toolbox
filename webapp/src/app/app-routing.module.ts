import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { StorageComponent } from './modules/devices/components/storage/storage.component';
import { DeviceLicensesComponent } from './modules/devices/components/device-licenses/device-licenses.component';
import { DeviceComponent } from './modules/devices/components/device/device.component';
import { DevicesComponent } from './modules/devices/components/devices/devices.component';


const routes: Routes = [


  {
    path: 'dashboard',
    component: DashboardComponent
  },

  {
    path: 'devices',
    component: DevicesComponent,
  },

  {
    path: 'devices/details/:id',
    component: DeviceComponent
  },
  {
    path: 'devices/licenses',
    component: DeviceLicensesComponent
  },
  {
    path: 'devices/storage/:storeid',
    component: StorageComponent
  },
  {
    path: 'devices/storage',
    component: StorageComponent
  },

  {
    path: '**',
    component: DashboardComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      routes,
      {
        paramsInheritanceStrategy: 'always',
        // useHash: true
      })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
