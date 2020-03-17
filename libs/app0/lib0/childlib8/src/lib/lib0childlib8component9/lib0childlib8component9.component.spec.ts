import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0childlib8component9Component } from './lib0childlib8component9.component';

describe('Lib0childlib8component9Component', () => {
  let component: Lib0childlib8component9Component;
  let fixture: ComponentFixture<Lib0childlib8component9Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib0childlib8component9Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0childlib8component9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
