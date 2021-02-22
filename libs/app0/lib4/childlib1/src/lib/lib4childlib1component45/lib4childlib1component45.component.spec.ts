import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { Lib4childlib1component45Component } from './lib4childlib1component45.component';

describe('Lib4childlib1component45Component', () => {
  let component: Lib4childlib1component45Component;
  let fixture: ComponentFixture<Lib4childlib1component45Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [Lib4childlib1component45Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib4childlib1component45Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
