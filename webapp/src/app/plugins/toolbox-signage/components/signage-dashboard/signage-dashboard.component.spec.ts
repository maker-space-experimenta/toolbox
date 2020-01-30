import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignageDashboardComponent } from './signage-dashboard.component';

describe('SignageDashboardComponent', () => {
  let component: SignageDashboardComponent;
  let fixture: ComponentFixture<SignageDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignageDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignageDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
