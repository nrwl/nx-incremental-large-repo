import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib4childlib2component21Component } from './lib4childlib2component21.component';

describe('Lib4childlib2component21Component', () => {
  let component: Lib4childlib2component21Component;
  let fixture: ComponentFixture<Lib4childlib2component21Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib4childlib2component21Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib4childlib2component21Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
