import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { Lib0childlib3component43Component } from './lib0childlib3component43.component';

describe('Lib0childlib3component43Component', () => {
  let component: Lib0childlib3component43Component;
  let fixture: ComponentFixture<Lib0childlib3component43Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [Lib0childlib3component43Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0childlib3component43Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
