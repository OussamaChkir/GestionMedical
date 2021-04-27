import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CnamListComponent } from './cnam-list.component';

describe('CnamListComponent', () => {
  let component: CnamListComponent;
  let fixture: ComponentFixture<CnamListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CnamListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CnamListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
