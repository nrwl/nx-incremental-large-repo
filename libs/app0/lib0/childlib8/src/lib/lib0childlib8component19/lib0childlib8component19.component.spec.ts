import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { Lib0childlib8component19Component } from './lib0childlib8component19.component';

describe('Lib0childlib8component19Component', () => {
  let component: Lib0childlib8component19Component;
  let fixture: ComponentFixture<Lib0childlib8component19Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [Lib0childlib8component19Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0childlib8component19Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
