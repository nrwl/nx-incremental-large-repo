import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { Lib0childlib0component10Component } from './lib0childlib0component10.component';

describe('Lib0childlib0component10Component', () => {
  let component: Lib0childlib0component10Component;
  let fixture: ComponentFixture<Lib0childlib0component10Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [Lib0childlib0component10Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0childlib0component10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
