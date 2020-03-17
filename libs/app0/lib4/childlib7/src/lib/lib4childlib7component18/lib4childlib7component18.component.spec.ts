import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib4childlib7component18Component } from './lib4childlib7component18.component';

describe('Lib4childlib7component18Component', () => {
  let component: Lib4childlib7component18Component;
  let fixture: ComponentFixture<Lib4childlib7component18Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib4childlib7component18Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib4childlib7component18Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
