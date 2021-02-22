import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { Lib0childlib3component33Component } from './lib0childlib3component33.component';

describe('Lib0childlib3component33Component', () => {
  let component: Lib0childlib3component33Component;
  let fixture: ComponentFixture<Lib0childlib3component33Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [Lib0childlib3component33Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0childlib3component33Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
