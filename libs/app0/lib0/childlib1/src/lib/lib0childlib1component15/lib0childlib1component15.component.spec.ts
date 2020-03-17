import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0childlib1component15Component } from './lib0childlib1component15.component';

describe('Lib0childlib1component15Component', () => {
  let component: Lib0childlib1component15Component;
  let fixture: ComponentFixture<Lib0childlib1component15Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib0childlib1component15Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0childlib1component15Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
