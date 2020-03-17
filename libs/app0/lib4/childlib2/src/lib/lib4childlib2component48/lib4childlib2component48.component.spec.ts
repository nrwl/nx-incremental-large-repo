import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib4childlib2component48Component } from './lib4childlib2component48.component';

describe('Lib4childlib2component48Component', () => {
  let component: Lib4childlib2component48Component;
  let fixture: ComponentFixture<Lib4childlib2component48Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib4childlib2component48Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib4childlib2component48Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
