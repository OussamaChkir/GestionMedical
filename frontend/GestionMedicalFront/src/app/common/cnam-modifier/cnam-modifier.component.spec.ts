import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CnamModifierComponent } from './cnam-modifier.component';

describe('CnamModifierComponent', () => {
  let component: CnamModifierComponent;
  let fixture: ComponentFixture<CnamModifierComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CnamModifierComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CnamModifierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
