import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0childlib1component45Component } from './lib0childlib1component45.component';

describe('Lib0childlib1component45Component', () => {
  let component: Lib0childlib1component45Component;
  let fixture: ComponentFixture<Lib0childlib1component45Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib0childlib1component45Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0childlib1component45Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
