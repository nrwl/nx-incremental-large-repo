import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1childlib2component40Component } from './lib1childlib2component40.component';

describe('Lib1childlib2component40Component', () => {
  let component: Lib1childlib2component40Component;
  let fixture: ComponentFixture<Lib1childlib2component40Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib1childlib2component40Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1childlib2component40Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
