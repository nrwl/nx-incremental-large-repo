import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0childlib2component36Component } from './lib0childlib2component36.component';

describe('Lib0childlib2component36Component', () => {
  let component: Lib0childlib2component36Component;
  let fixture: ComponentFixture<Lib0childlib2component36Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib0childlib2component36Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0childlib2component36Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
