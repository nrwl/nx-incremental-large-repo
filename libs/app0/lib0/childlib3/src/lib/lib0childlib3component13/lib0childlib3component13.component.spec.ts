import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { Lib0childlib3component13Component } from './lib0childlib3component13.component';

describe('Lib0childlib3component13Component', () => {
  let component: Lib0childlib3component13Component;
  let fixture: ComponentFixture<Lib0childlib3component13Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [Lib0childlib3component13Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0childlib3component13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
