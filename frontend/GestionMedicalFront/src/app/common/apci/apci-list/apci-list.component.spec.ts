import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApciListComponent } from './apci-list.component';

describe('ApciListComponent', () => {
  let component: ApciListComponent;
  let fixture: ComponentFixture<ApciListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApciListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApciListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
