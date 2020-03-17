import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0childlib3component26Component } from './lib0childlib3component26.component';

describe('Lib0childlib3component26Component', () => {
  let component: Lib0childlib3component26Component;
  let fixture: ComponentFixture<Lib0childlib3component26Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib0childlib3component26Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0childlib3component26Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
