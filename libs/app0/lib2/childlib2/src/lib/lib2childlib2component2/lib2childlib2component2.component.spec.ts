import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2childlib2component2Component } from './lib2childlib2component2.component';

describe('Lib2childlib2component2Component', () => {
  let component: Lib2childlib2component2Component;
  let fixture: ComponentFixture<Lib2childlib2component2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib2childlib2component2Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2childlib2component2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
