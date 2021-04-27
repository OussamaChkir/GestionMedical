import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LettreAjoutComponent } from './lettre-ajout.component';

describe('LettreAjoutComponent', () => {
  let component: LettreAjoutComponent;
  let fixture: ComponentFixture<LettreAjoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LettreAjoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LettreAjoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
