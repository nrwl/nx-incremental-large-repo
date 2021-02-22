import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { Lib4childlib3component6Component } from './lib4childlib3component6.component';

describe('Lib4childlib3component6Component', () => {
  let component: Lib4childlib3component6Component;
  let fixture: ComponentFixture<Lib4childlib3component6Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [Lib4childlib3component6Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib4childlib3component6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
