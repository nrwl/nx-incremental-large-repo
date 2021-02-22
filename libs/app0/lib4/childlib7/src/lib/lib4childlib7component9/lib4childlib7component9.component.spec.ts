import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { Lib4childlib7component9Component } from './lib4childlib7component9.component';

describe('Lib4childlib7component9Component', () => {
  let component: Lib4childlib7component9Component;
  let fixture: ComponentFixture<Lib4childlib7component9Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [Lib4childlib7component9Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib4childlib7component9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
