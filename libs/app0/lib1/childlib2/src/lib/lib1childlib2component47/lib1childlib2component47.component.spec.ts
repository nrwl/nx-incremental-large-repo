import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1childlib2component47Component } from './lib1childlib2component47.component';

describe('Lib1childlib2component47Component', () => {
  let component: Lib1childlib2component47Component;
  let fixture: ComponentFixture<Lib1childlib2component47Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib1childlib2component47Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1childlib2component47Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
