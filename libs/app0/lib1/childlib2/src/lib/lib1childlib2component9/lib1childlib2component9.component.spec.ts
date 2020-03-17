import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1childlib2component9Component } from './lib1childlib2component9.component';

describe('Lib1childlib2component9Component', () => {
  let component: Lib1childlib2component9Component;
  let fixture: ComponentFixture<Lib1childlib2component9Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib1childlib2component9Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1childlib2component9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
