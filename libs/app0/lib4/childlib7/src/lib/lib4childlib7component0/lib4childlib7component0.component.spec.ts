import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { Lib4childlib7component0Component } from './lib4childlib7component0.component';

describe('Lib4childlib7component0Component', () => {
  let component: Lib4childlib7component0Component;
  let fixture: ComponentFixture<Lib4childlib7component0Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [Lib4childlib7component0Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib4childlib7component0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
