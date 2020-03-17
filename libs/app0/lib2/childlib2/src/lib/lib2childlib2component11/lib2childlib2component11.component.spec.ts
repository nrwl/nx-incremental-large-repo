import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2childlib2component11Component } from './lib2childlib2component11.component';

describe('Lib2childlib2component11Component', () => {
  let component: Lib2childlib2component11Component;
  let fixture: ComponentFixture<Lib2childlib2component11Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib2childlib2component11Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2childlib2component11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
