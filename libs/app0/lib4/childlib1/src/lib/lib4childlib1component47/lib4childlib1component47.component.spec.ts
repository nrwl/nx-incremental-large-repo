import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { Lib4childlib1component47Component } from './lib4childlib1component47.component';

describe('Lib4childlib1component47Component', () => {
  let component: Lib4childlib1component47Component;
  let fixture: ComponentFixture<Lib4childlib1component47Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [Lib4childlib1component47Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib4childlib1component47Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
