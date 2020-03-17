import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib4childlib2component47Component } from './lib4childlib2component47.component';

describe('Lib4childlib2component47Component', () => {
  let component: Lib4childlib2component47Component;
  let fixture: ComponentFixture<Lib4childlib2component47Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib4childlib2component47Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib4childlib2component47Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
