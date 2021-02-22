import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { Lib0childlib1component49Component } from './lib0childlib1component49.component';

describe('Lib0childlib1component49Component', () => {
  let component: Lib0childlib1component49Component;
  let fixture: ComponentFixture<Lib0childlib1component49Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [Lib0childlib1component49Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0childlib1component49Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
