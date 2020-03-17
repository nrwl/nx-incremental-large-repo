import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2childlib2component27Component } from './lib2childlib2component27.component';

describe('Lib2childlib2component27Component', () => {
  let component: Lib2childlib2component27Component;
  let fixture: ComponentFixture<Lib2childlib2component27Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib2childlib2component27Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2childlib2component27Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
