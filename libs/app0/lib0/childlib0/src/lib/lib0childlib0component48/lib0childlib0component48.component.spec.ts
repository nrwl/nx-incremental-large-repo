import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0childlib0component48Component } from './lib0childlib0component48.component';

describe('Lib0childlib0component48Component', () => {
  let component: Lib0childlib0component48Component;
  let fixture: ComponentFixture<Lib0childlib0component48Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib0childlib0component48Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0childlib0component48Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
