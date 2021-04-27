import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdonnanceListComponent } from './ordonnance-list.component';

describe('OrdonnanceListComponent', () => {
  let component: OrdonnanceListComponent;
  let fixture: ComponentFixture<OrdonnanceListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrdonnanceListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdonnanceListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
