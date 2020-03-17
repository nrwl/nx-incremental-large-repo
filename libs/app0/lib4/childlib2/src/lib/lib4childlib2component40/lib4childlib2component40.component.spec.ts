import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib4childlib2component40Component } from './lib4childlib2component40.component';

describe('Lib4childlib2component40Component', () => {
  let component: Lib4childlib2component40Component;
  let fixture: ComponentFixture<Lib4childlib2component40Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib4childlib2component40Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib4childlib2component40Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
