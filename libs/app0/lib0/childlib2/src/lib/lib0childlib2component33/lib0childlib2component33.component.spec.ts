import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0childlib2component33Component } from './lib0childlib2component33.component';

describe('Lib0childlib2component33Component', () => {
  let component: Lib0childlib2component33Component;
  let fixture: ComponentFixture<Lib0childlib2component33Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib0childlib2component33Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0childlib2component33Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
