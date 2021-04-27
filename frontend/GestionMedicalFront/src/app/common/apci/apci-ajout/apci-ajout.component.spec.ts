import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApciAjoutComponent } from './apci-ajout.component';

describe('ApciAjoutComponent', () => {
  let component: ApciAjoutComponent;
  let fixture: ComponentFixture<ApciAjoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApciAjoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApciAjoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
