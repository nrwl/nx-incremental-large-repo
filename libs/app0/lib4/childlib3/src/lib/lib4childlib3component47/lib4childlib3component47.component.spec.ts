import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { Lib4childlib3component47Component } from './lib4childlib3component47.component';

describe('Lib4childlib3component47Component', () => {
  let component: Lib4childlib3component47Component;
  let fixture: ComponentFixture<Lib4childlib3component47Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [Lib4childlib3component47Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib4childlib3component47Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
