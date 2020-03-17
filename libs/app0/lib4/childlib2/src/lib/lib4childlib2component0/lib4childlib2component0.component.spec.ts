import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib4childlib2component0Component } from './lib4childlib2component0.component';

describe('Lib4childlib2component0Component', () => {
  let component: Lib4childlib2component0Component;
  let fixture: ComponentFixture<Lib4childlib2component0Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib4childlib2component0Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib4childlib2component0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
