import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0childlib1component2Component } from './lib0childlib1component2.component';

describe('Lib0childlib1component2Component', () => {
  let component: Lib0childlib1component2Component;
  let fixture: ComponentFixture<Lib0childlib1component2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib0childlib1component2Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0childlib1component2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
