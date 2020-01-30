import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartWeekdayHeatmapComponent } from './chart-weekday-heatmap.component';

describe('ChartWeekdayHeatmapComponent', () => {
  let component: ChartWeekdayHeatmapComponent;
  let fixture: ComponentFixture<ChartWeekdayHeatmapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChartWeekdayHeatmapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartWeekdayHeatmapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
