import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { Lib0childlib3component49Component } from './lib0childlib3component49.component';

describe('Lib0childlib3component49Component', () => {
  let component: Lib0childlib3component49Component;
  let fixture: ComponentFixture<Lib0childlib3component49Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [Lib0childlib3component49Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0childlib3component49Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
