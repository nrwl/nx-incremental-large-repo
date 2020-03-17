import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0childlib0component21Component } from './lib0childlib0component21.component';

describe('Lib0childlib0component21Component', () => {
  let component: Lib0childlib0component21Component;
  let fixture: ComponentFixture<Lib0childlib0component21Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib0childlib0component21Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0childlib0component21Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
