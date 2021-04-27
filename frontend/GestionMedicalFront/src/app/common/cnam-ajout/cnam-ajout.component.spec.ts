import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CnamAjoutComponent } from './cnam-ajout.component';

describe('CnamAjoutComponent', () => {
  let component: CnamAjoutComponent;
  let fixture: ComponentFixture<CnamAjoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CnamAjoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CnamAjoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
