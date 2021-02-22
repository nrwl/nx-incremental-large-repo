import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { Lib4childlib9component21Component } from './lib4childlib9component21.component';

describe('Lib4childlib9component21Component', () => {
  let component: Lib4childlib9component21Component;
  let fixture: ComponentFixture<Lib4childlib9component21Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [Lib4childlib9component21Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib4childlib9component21Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
