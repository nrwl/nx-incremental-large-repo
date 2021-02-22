import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { Lib4childlib9component28Component } from './lib4childlib9component28.component';

describe('Lib4childlib9component28Component', () => {
  let component: Lib4childlib9component28Component;
  let fixture: ComponentFixture<Lib4childlib9component28Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [Lib4childlib9component28Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib4childlib9component28Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
