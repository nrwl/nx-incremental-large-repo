import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2childlib2component22Component } from './lib2childlib2component22.component';

describe('Lib2childlib2component22Component', () => {
  let component: Lib2childlib2component22Component;
  let fixture: ComponentFixture<Lib2childlib2component22Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib2childlib2component22Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2childlib2component22Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
