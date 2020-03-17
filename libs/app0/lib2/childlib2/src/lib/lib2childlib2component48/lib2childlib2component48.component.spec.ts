import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2childlib2component48Component } from './lib2childlib2component48.component';

describe('Lib2childlib2component48Component', () => {
  let component: Lib2childlib2component48Component;
  let fixture: ComponentFixture<Lib2childlib2component48Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib2childlib2component48Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2childlib2component48Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
