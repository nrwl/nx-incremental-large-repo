import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0childlib4component9Component } from './lib0childlib4component9.component';

describe('Lib0childlib4component9Component', () => {
  let component: Lib0childlib4component9Component;
  let fixture: ComponentFixture<Lib0childlib4component9Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib0childlib4component9Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0childlib4component9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
