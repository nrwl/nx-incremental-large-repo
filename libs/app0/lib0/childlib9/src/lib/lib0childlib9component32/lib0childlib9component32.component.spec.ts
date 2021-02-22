import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { Lib0childlib9component32Component } from './lib0childlib9component32.component';

describe('Lib0childlib9component32Component', () => {
  let component: Lib0childlib9component32Component;
  let fixture: ComponentFixture<Lib0childlib9component32Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [Lib0childlib9component32Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0childlib9component32Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
