import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamenAjoutComponent } from './examen-ajout.component';

describe('ExamenAjoutComponent', () => {
  let component: ExamenAjoutComponent;
  let fixture: ComponentFixture<ExamenAjoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExamenAjoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExamenAjoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
