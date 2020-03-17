import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1childlib2component34Component } from './lib1childlib2component34.component';

describe('Lib1childlib2component34Component', () => {
  let component: Lib1childlib2component34Component;
  let fixture: ComponentFixture<Lib1childlib2component34Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib1childlib2component34Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1childlib2component34Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
