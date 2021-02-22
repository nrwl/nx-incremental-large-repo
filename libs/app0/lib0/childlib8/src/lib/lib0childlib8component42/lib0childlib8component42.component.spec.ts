import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { Lib0childlib8component42Component } from './lib0childlib8component42.component';

describe('Lib0childlib8component42Component', () => {
  let component: Lib0childlib8component42Component;
  let fixture: ComponentFixture<Lib0childlib8component42Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [Lib0childlib8component42Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0childlib8component42Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
