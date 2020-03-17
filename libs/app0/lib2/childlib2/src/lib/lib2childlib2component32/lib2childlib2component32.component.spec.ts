import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2childlib2component32Component } from './lib2childlib2component32.component';

describe('Lib2childlib2component32Component', () => {
  let component: Lib2childlib2component32Component;
  let fixture: ComponentFixture<Lib2childlib2component32Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib2childlib2component32Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2childlib2component32Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
