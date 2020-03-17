import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib4childlib2component7Component } from './lib4childlib2component7.component';

describe('Lib4childlib2component7Component', () => {
  let component: Lib4childlib2component7Component;
  let fixture: ComponentFixture<Lib4childlib2component7Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib4childlib2component7Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib4childlib2component7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
