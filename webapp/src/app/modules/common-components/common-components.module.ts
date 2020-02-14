import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartVisitorsComponent } from './components/chart-visitors/chart-visitors.component';
import { InputDocumentsComponent } from './components/input-documents/input-documents.component';
import { ClarityModule } from '@clr/angular';
import { ChartWeekdayHeatmapComponent } from './components/chart-weekday-heatmap/chart-weekday-heatmap.component';
import { ArrayLengthPipe } from './pipes/array-length.pipe';



@NgModule({
  declarations: [
    ChartVisitorsComponent,
    InputDocumentsComponent,
    ChartWeekdayHeatmapComponent,
    ArrayLengthPipe
  ],
  imports: [
    CommonModule,
    ClarityModule,
  ],
  exports: [
    ChartVisitorsComponent,
    ChartWeekdayHeatmapComponent,
    InputDocumentsComponent,
    ArrayLengthPipe
  ]
})
export class CommonComponentsModule { }
