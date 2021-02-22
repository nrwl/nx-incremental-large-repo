import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { Lib2childlib1component9Component } from './lib2childlib1component9.component';

describe('Lib2childlib1component9Component', () => {
  let component: Lib2childlib1component9Component;
  let fixture: ComponentFixture<Lib2childlib1component9Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [Lib2childlib1component9Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2childlib1component9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
