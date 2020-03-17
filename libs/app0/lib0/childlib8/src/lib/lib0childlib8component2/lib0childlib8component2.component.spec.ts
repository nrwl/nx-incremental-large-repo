import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0childlib8component2Component } from './lib0childlib8component2.component';

describe('Lib0childlib8component2Component', () => {
  let component: Lib0childlib8component2Component;
  let fixture: ComponentFixture<Lib0childlib8component2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib0childlib8component2Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0childlib8component2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
