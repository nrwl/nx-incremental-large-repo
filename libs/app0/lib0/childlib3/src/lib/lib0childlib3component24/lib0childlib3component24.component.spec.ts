import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { Lib0childlib3component24Component } from './lib0childlib3component24.component';

describe('Lib0childlib3component24Component', () => {
  let component: Lib0childlib3component24Component;
  let fixture: ComponentFixture<Lib0childlib3component24Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [Lib0childlib3component24Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0childlib3component24Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
