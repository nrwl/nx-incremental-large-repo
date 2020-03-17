import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0childlib1component0Component } from './lib0childlib1component0.component';

describe('Lib0childlib1component0Component', () => {
  let component: Lib0childlib1component0Component;
  let fixture: ComponentFixture<Lib0childlib1component0Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib0childlib1component0Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0childlib1component0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
