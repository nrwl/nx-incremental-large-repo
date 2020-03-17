import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib3childlib2component22Component } from './lib3childlib2component22.component';

describe('Lib3childlib2component22Component', () => {
  let component: Lib3childlib2component22Component;
  let fixture: ComponentFixture<Lib3childlib2component22Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib3childlib2component22Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib3childlib2component22Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
