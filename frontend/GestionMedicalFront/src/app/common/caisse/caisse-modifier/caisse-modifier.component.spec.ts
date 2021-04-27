import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CaisseModifierComponent } from './caisse-modifier.component';

describe('CaisseModifierComponent', () => {
  let component: CaisseModifierComponent;
  let fixture: ComponentFixture<CaisseModifierComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CaisseModifierComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CaisseModifierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
