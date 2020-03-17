import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0childlib2component48Component } from './lib0childlib2component48.component';

describe('Lib0childlib2component48Component', () => {
  let component: Lib0childlib2component48Component;
  let fixture: ComponentFixture<Lib0childlib2component48Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib0childlib2component48Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0childlib2component48Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
