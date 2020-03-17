import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0childlib3component14Component } from './lib0childlib3component14.component';

describe('Lib0childlib3component14Component', () => {
  let component: Lib0childlib3component14Component;
  let fixture: ComponentFixture<Lib0childlib3component14Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib0childlib3component14Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0childlib3component14Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
