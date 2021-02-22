import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { Lib2childlib1component18Component } from './lib2childlib1component18.component';

describe('Lib2childlib1component18Component', () => {
  let component: Lib2childlib1component18Component;
  let fixture: ComponentFixture<Lib2childlib1component18Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [Lib2childlib1component18Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2childlib1component18Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
