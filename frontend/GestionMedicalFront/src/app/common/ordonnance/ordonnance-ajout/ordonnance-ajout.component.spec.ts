import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdonnanceAjoutComponent } from './ordonnance-ajout.component';

describe('OrdonnanceAjoutComponent', () => {
  let component: OrdonnanceAjoutComponent;
  let fixture: ComponentFixture<OrdonnanceAjoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrdonnanceAjoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdonnanceAjoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
