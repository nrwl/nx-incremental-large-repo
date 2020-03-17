import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2childlib3component48Component } from './lib2childlib3component48.component';

describe('Lib2childlib3component48Component', () => {
  let component: Lib2childlib3component48Component;
  let fixture: ComponentFixture<Lib2childlib3component48Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib2childlib3component48Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2childlib3component48Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
