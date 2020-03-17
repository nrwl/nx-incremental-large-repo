import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib3childlib2component18Component } from './lib3childlib2component18.component';

describe('Lib3childlib2component18Component', () => {
  let component: Lib3childlib2component18Component;
  let fixture: ComponentFixture<Lib3childlib2component18Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib3childlib2component18Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib3childlib2component18Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
