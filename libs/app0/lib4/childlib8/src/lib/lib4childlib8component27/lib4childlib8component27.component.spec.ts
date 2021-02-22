import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { Lib4childlib8component27Component } from './lib4childlib8component27.component';

describe('Lib4childlib8component27Component', () => {
  let component: Lib4childlib8component27Component;
  let fixture: ComponentFixture<Lib4childlib8component27Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [Lib4childlib8component27Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib4childlib8component27Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
