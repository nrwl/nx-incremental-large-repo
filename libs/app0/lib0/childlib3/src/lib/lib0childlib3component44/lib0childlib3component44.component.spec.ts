import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0childlib3component44Component } from './lib0childlib3component44.component';

describe('Lib0childlib3component44Component', () => {
  let component: Lib0childlib3component44Component;
  let fixture: ComponentFixture<Lib0childlib3component44Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib0childlib3component44Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0childlib3component44Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
