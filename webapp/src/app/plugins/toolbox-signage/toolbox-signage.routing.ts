import {RouterModule, Routes} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import { SignageDashboardComponent } from './components/signage-dashboard/signage-dashboard.component';

const routes: Routes = [
    {
        path: 'dashboard',
        component: SignageDashboardComponent,
    }
];

export const ToolboxSignageModuleRouting: ModuleWithProviders = RouterModule.forChild(routes);