import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { Lib0childlib4component48Component } from './lib0childlib4component48.component';

describe('Lib0childlib4component48Component', () => {
  let component: Lib0childlib4component48Component;
  let fixture: ComponentFixture<Lib0childlib4component48Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [Lib0childlib4component48Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0childlib4component48Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
