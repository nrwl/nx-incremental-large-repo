import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { Lib4childlib1component42Component } from './lib4childlib1component42.component';

describe('Lib4childlib1component42Component', () => {
  let component: Lib4childlib1component42Component;
  let fixture: ComponentFixture<Lib4childlib1component42Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [Lib4childlib1component42Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib4childlib1component42Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
