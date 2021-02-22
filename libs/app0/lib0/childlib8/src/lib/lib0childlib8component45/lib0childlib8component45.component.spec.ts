import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { Lib0childlib8component45Component } from './lib0childlib8component45.component';

describe('Lib0childlib8component45Component', () => {
  let component: Lib0childlib8component45Component;
  let fixture: ComponentFixture<Lib0childlib8component45Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [Lib0childlib8component45Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0childlib8component45Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
