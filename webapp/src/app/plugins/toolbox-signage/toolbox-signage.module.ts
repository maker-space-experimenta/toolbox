import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolboxSignageModuleRouting } from './toolbox-signage.routing';
import { SignageDashboardComponent } from './components/signage-dashboard/signage-dashboard.component';
import { MenuService } from 'src/app/services/menu.service';



@NgModule({
  declarations: [
    SignageDashboardComponent
  ],
  imports: [
    CommonModule,
    ToolboxSignageModuleRouting
  ]
})
export class ToolboxSignageModule {
  constructor(private menuService: MenuService) {
  }
}