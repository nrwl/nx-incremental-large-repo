import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { Lib2childlib3component45Component } from './lib2childlib3component45.component';

describe('Lib2childlib3component45Component', () => {
  let component: Lib2childlib3component45Component;
  let fixture: ComponentFixture<Lib2childlib3component45Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [Lib2childlib3component45Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2childlib3component45Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
