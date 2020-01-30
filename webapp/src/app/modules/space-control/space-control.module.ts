import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatisticsComponent } from './components/statistics/statistics.component';
import { SpaceControlModuleRouting } from './space-control.routing';
import { CommonComponentsModule } from '../common-components/common-components.module';
import { PresenceComponent } from './components/presence/presence.component';
import { ClarityModule } from '@clr/angular';



@NgModule({
  declarations: [StatisticsComponent, PresenceComponent],
  imports: [
    CommonModule,
    SpaceControlModuleRouting,
    CommonComponentsModule,
    ClarityModule
  ]
})
export class SpaceControlModule { }
