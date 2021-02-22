import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { Lib4childlib1component25Component } from './lib4childlib1component25.component';

describe('Lib4childlib1component25Component', () => {
  let component: Lib4childlib1component25Component;
  let fixture: ComponentFixture<Lib4childlib1component25Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [Lib4childlib1component25Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib4childlib1component25Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
