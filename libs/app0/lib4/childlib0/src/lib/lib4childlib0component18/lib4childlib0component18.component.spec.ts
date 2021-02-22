import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { Lib4childlib0component18Component } from './lib4childlib0component18.component';

describe('Lib4childlib0component18Component', () => {
  let component: Lib4childlib0component18Component;
  let fixture: ComponentFixture<Lib4childlib0component18Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [Lib4childlib0component18Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib4childlib0component18Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
