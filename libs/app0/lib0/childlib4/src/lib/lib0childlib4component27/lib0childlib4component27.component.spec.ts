import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0childlib4component27Component } from './lib0childlib4component27.component';

describe('Lib0childlib4component27Component', () => {
  let component: Lib0childlib4component27Component;
  let fixture: ComponentFixture<Lib0childlib4component27Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib0childlib4component27Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0childlib4component27Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
