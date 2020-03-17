import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0childlib5component0Component } from './lib0childlib5component0.component';

describe('Lib0childlib5component0Component', () => {
  let component: Lib0childlib5component0Component;
  let fixture: ComponentFixture<Lib0childlib5component0Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib0childlib5component0Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0childlib5component0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
