import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { Lib0childlib2component18Component } from './lib0childlib2component18.component';

describe('Lib0childlib2component18Component', () => {
  let component: Lib0childlib2component18Component;
  let fixture: ComponentFixture<Lib0childlib2component18Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [Lib0childlib2component18Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0childlib2component18Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
