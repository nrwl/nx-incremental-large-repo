import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0childlib8component13Component } from './lib0childlib8component13.component';

describe('Lib0childlib8component13Component', () => {
  let component: Lib0childlib8component13Component;
  let fixture: ComponentFixture<Lib0childlib8component13Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib0childlib8component13Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0childlib8component13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
