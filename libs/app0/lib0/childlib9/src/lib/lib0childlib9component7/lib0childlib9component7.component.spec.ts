import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0childlib9component7Component } from './lib0childlib9component7.component';

describe('Lib0childlib9component7Component', () => {
  let component: Lib0childlib9component7Component;
  let fixture: ComponentFixture<Lib0childlib9component7Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib0childlib9component7Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0childlib9component7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
