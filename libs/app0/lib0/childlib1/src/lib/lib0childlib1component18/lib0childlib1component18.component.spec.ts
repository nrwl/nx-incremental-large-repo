import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0childlib1component18Component } from './lib0childlib1component18.component';

describe('Lib0childlib1component18Component', () => {
  let component: Lib0childlib1component18Component;
  let fixture: ComponentFixture<Lib0childlib1component18Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib0childlib1component18Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0childlib1component18Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
