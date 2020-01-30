import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartVisitorsComponent } from './chart-visitors.component';

describe('ChartVisitorsComponent', () => {
  let component: ChartVisitorsComponent;
  let fixture: ComponentFixture<ChartVisitorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChartVisitorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartVisitorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
