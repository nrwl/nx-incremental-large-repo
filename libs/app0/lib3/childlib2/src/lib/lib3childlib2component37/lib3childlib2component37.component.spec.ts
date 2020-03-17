import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib3childlib2component37Component } from './lib3childlib2component37.component';

describe('Lib3childlib2component37Component', () => {
  let component: Lib3childlib2component37Component;
  let fixture: ComponentFixture<Lib3childlib2component37Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib3childlib2component37Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib3childlib2component37Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
