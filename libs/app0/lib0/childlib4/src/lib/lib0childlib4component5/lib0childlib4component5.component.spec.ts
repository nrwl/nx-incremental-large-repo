import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { Lib0childlib4component5Component } from './lib0childlib4component5.component';

describe('Lib0childlib4component5Component', () => {
  let component: Lib0childlib4component5Component;
  let fixture: ComponentFixture<Lib0childlib4component5Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [Lib0childlib4component5Component],
      teardown: { destroyAfterEach: false },
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0childlib4component5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
