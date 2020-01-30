import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { ProjectDashboardComponent } from './components/project-dashboard/project-dashboard.component';

const routes: Routes = [
    {
        path: '',
        component: ProjectDashboardComponent
    },
];

export const ProjectsModuleRouting: ModuleWithProviders = RouterModule.forChild(routes);