import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0childlib9component1Component } from './lib0childlib9component1.component';

describe('Lib0childlib9component1Component', () => {
  let component: Lib0childlib9component1Component;
  let fixture: ComponentFixture<Lib0childlib9component1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib0childlib9component1Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0childlib9component1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
