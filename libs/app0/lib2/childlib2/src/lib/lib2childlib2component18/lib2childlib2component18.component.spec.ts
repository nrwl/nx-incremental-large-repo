import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2childlib2component18Component } from './lib2childlib2component18.component';

describe('Lib2childlib2component18Component', () => {
  let component: Lib2childlib2component18Component;
  let fixture: ComponentFixture<Lib2childlib2component18Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib2childlib2component18Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2childlib2component18Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
