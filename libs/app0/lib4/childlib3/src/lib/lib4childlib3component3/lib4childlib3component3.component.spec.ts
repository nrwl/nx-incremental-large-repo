import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { Lib4childlib3component3Component } from './lib4childlib3component3.component';

describe('Lib4childlib3component3Component', () => {
  let component: Lib4childlib3component3Component;
  let fixture: ComponentFixture<Lib4childlib3component3Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [Lib4childlib3component3Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib4childlib3component3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
