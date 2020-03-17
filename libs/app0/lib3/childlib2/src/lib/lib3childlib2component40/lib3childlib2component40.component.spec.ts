import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib3childlib2component40Component } from './lib3childlib2component40.component';

describe('Lib3childlib2component40Component', () => {
  let component: Lib3childlib2component40Component;
  let fixture: ComponentFixture<Lib3childlib2component40Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib3childlib2component40Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib3childlib2component40Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
