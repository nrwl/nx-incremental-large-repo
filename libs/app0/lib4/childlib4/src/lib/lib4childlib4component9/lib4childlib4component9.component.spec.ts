import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib4childlib4component9Component } from './lib4childlib4component9.component';

describe('Lib4childlib4component9Component', () => {
  let component: Lib4childlib4component9Component;
  let fixture: ComponentFixture<Lib4childlib4component9Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib4childlib4component9Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib4childlib4component9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
