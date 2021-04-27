import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaisseAjoutComponent } from './caisse-ajout.component';

describe('CaisseAjoutComponent', () => {
  let component: CaisseAjoutComponent;
  let fixture: ComponentFixture<CaisseAjoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaisseAjoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaisseAjoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
