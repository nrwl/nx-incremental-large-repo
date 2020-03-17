import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2childlib2component37Component } from './lib2childlib2component37.component';

describe('Lib2childlib2component37Component', () => {
  let component: Lib2childlib2component37Component;
  let fixture: ComponentFixture<Lib2childlib2component37Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib2childlib2component37Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2childlib2component37Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
