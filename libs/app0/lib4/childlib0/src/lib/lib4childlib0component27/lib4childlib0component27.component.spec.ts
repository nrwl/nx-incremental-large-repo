import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { Lib4childlib0component27Component } from './lib4childlib0component27.component';

describe('Lib4childlib0component27Component', () => {
  let component: Lib4childlib0component27Component;
  let fixture: ComponentFixture<Lib4childlib0component27Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [Lib4childlib0component27Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib4childlib0component27Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
