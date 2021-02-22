import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { Lib0childlib9component21Component } from './lib0childlib9component21.component';

describe('Lib0childlib9component21Component', () => {
  let component: Lib0childlib9component21Component;
  let fixture: ComponentFixture<Lib0childlib9component21Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [Lib0childlib9component21Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0childlib9component21Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
