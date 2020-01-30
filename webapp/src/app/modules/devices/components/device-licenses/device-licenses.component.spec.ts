import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeviceLicensesComponent } from './device-licenses.component';

describe('DeviceLicensesComponent', () => {
  let component: DeviceLicensesComponent;
  let fixture: ComponentFixture<DeviceLicensesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeviceLicensesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeviceLicensesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
