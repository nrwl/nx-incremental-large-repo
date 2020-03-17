import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2childlib2component5Component } from './lib2childlib2component5.component';

describe('Lib2childlib2component5Component', () => {
  let component: Lib2childlib2component5Component;
  let fixture: ComponentFixture<Lib2childlib2component5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib2childlib2component5Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2childlib2component5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
