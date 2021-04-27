import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientModifierComponent } from './patient-modifier.component';

describe('PatientModifierComponent', () => {
  let component: PatientModifierComponent;
  let fixture: ComponentFixture<PatientModifierComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientModifierComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientModifierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
