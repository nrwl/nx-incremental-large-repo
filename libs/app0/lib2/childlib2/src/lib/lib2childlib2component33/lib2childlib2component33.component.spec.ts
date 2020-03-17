import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2childlib2component33Component } from './lib2childlib2component33.component';

describe('Lib2childlib2component33Component', () => {
  let component: Lib2childlib2component33Component;
  let fixture: ComponentFixture<Lib2childlib2component33Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib2childlib2component33Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2childlib2component33Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
