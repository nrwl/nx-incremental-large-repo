import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0childlib3component34Component } from './lib0childlib3component34.component';

describe('Lib0childlib3component34Component', () => {
  let component: Lib0childlib3component34Component;
  let fixture: ComponentFixture<Lib0childlib3component34Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib0childlib3component34Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0childlib3component34Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
