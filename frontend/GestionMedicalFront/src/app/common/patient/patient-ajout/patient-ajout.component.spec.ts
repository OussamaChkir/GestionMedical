import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientAjoutComponent } from './patient-ajout.component';

describe('PatientAjoutComponent', () => {
  let component: PatientAjoutComponent;
  let fixture: ComponentFixture<PatientAjoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientAjoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientAjoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
