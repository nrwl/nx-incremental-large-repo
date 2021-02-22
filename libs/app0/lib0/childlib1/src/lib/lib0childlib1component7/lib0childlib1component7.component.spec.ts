import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { Lib0childlib1component7Component } from './lib0childlib1component7.component';

describe('Lib0childlib1component7Component', () => {
  let component: Lib0childlib1component7Component;
  let fixture: ComponentFixture<Lib0childlib1component7Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [Lib0childlib1component7Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0childlib1component7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
