import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { Lib4childlib9component13Component } from './lib4childlib9component13.component';

describe('Lib4childlib9component13Component', () => {
  let component: Lib4childlib9component13Component;
  let fixture: ComponentFixture<Lib4childlib9component13Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [Lib4childlib9component13Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib4childlib9component13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
