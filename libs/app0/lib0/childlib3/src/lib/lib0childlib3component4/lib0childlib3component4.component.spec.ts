import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0childlib3component4Component } from './lib0childlib3component4.component';

describe('Lib0childlib3component4Component', () => {
  let component: Lib0childlib3component4Component;
  let fixture: ComponentFixture<Lib0childlib3component4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib0childlib3component4Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0childlib3component4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
