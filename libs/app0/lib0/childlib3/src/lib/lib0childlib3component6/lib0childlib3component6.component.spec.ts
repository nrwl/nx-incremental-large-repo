import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0childlib3component6Component } from './lib0childlib3component6.component';

describe('Lib0childlib3component6Component', () => {
  let component: Lib0childlib3component6Component;
  let fixture: ComponentFixture<Lib0childlib3component6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib0childlib3component6Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0childlib3component6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
