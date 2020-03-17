import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib4childlib2component24Component } from './lib4childlib2component24.component';

describe('Lib4childlib2component24Component', () => {
  let component: Lib4childlib2component24Component;
  let fixture: ComponentFixture<Lib4childlib2component24Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib4childlib2component24Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib4childlib2component24Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
