import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0childlib4component10Component } from './lib0childlib4component10.component';

describe('Lib0childlib4component10Component', () => {
  let component: Lib0childlib4component10Component;
  let fixture: ComponentFixture<Lib0childlib4component10Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib0childlib4component10Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0childlib4component10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
