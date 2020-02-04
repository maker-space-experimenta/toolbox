import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { DevicesComponent } from './components/devices/devices.component';
import { DeviceComponent } from './components/device/device.component';
import { DeviceLicensesComponent } from './components/device-licenses/device-licenses.component';
import { StorageComponent } from './components/storage/storage.component';

const routes: Routes = [
    {
        path: '',
        component: DevicesComponent
    },
    {
        path: 'details/:id',
        component: DeviceComponent
    },
    {
        path: 'licenses',
        component: DeviceLicensesComponent
    },
    {
        path: 'storage',
        component: StorageComponent
    },
    {
        path: 'storage/:storeid',
        component: StorageComponent
    }
];

export const DevicesModuleRouting: ModuleWithProviders = RouterModule.forChild(routes);