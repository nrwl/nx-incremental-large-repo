import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { Lib4childlib8component15Component } from './lib4childlib8component15.component';

describe('Lib4childlib8component15Component', () => {
  let component: Lib4childlib8component15Component;
  let fixture: ComponentFixture<Lib4childlib8component15Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [Lib4childlib8component15Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib4childlib8component15Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
