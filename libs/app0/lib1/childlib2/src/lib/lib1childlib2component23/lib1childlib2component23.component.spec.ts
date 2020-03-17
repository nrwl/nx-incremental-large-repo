import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1childlib2component23Component } from './lib1childlib2component23.component';

describe('Lib1childlib2component23Component', () => {
  let component: Lib1childlib2component23Component;
  let fixture: ComponentFixture<Lib1childlib2component23Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib1childlib2component23Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1childlib2component23Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
