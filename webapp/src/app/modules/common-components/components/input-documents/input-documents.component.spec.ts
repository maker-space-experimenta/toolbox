import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputDocumentsComponent } from './input-documents.component';

describe('InputDocumentsComponent', () => {
  let component: InputDocumentsComponent;
  let fixture: ComponentFixture<InputDocumentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputDocumentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputDocumentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
