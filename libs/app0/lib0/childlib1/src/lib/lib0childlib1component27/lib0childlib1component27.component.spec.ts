import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { Lib0childlib1component27Component } from './lib0childlib1component27.component';

describe('Lib0childlib1component27Component', () => {
  let component: Lib0childlib1component27Component;
  let fixture: ComponentFixture<Lib0childlib1component27Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [Lib0childlib1component27Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0childlib1component27Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
