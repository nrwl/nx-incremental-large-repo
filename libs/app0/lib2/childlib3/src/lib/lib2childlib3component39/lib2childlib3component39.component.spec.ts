import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { Lib2childlib3component39Component } from './lib2childlib3component39.component';

describe('Lib2childlib3component39Component', () => {
  let component: Lib2childlib3component39Component;
  let fixture: ComponentFixture<Lib2childlib3component39Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [Lib2childlib3component39Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2childlib3component39Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
