import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0childlib8component14Component } from './lib0childlib8component14.component';

describe('Lib0childlib8component14Component', () => {
  let component: Lib0childlib8component14Component;
  let fixture: ComponentFixture<Lib0childlib8component14Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib0childlib8component14Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0childlib8component14Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
