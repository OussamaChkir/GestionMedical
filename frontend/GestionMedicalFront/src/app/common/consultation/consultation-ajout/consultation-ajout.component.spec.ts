import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultationAjoutComponent } from './consultation-ajout.component';

describe('ConsultationAjoutComponent', () => {
  let component: ConsultationAjoutComponent;
  let fixture: ComponentFixture<ConsultationAjoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultationAjoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultationAjoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
