import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0childlib3component1Component } from './lib0childlib3component1.component';

describe('Lib0childlib3component1Component', () => {
  let component: Lib0childlib3component1Component;
  let fixture: ComponentFixture<Lib0childlib3component1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib0childlib3component1Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0childlib3component1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
