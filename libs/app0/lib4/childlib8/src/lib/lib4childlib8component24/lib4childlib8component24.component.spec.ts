import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { Lib4childlib8component24Component } from './lib4childlib8component24.component';

describe('Lib4childlib8component24Component', () => {
  let component: Lib4childlib8component24Component;
  let fixture: ComponentFixture<Lib4childlib8component24Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [Lib4childlib8component24Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib4childlib8component24Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
