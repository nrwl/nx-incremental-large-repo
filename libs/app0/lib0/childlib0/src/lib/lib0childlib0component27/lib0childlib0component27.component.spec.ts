import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0childlib0component27Component } from './lib0childlib0component27.component';

describe('Lib0childlib0component27Component', () => {
  let component: Lib0childlib0component27Component;
  let fixture: ComponentFixture<Lib0childlib0component27Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib0childlib0component27Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0childlib0component27Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
