import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0childlib1component6Component } from './lib0childlib1component6.component';

describe('Lib0childlib1component6Component', () => {
  let component: Lib0childlib1component6Component;
  let fixture: ComponentFixture<Lib0childlib1component6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib0childlib1component6Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0childlib1component6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
