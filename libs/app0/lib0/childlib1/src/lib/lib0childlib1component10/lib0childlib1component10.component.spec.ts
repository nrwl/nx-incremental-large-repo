import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { Lib0childlib1component10Component } from './lib0childlib1component10.component';

describe('Lib0childlib1component10Component', () => {
  let component: Lib0childlib1component10Component;
  let fixture: ComponentFixture<Lib0childlib1component10Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [Lib0childlib1component10Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0childlib1component10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
