import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectDashboardComponent } from './components/project-dashboard/project-dashboard.component';
import { ProjectsModuleRouting } from './projects.routing';
import { ClarityModule } from '@clr/angular';



@NgModule({
  declarations: [ProjectDashboardComponent],
  imports: [
    CommonModule,
    ClarityModule,
    ProjectsModuleRouting
  ]
})
export class ProjectsModule { }
