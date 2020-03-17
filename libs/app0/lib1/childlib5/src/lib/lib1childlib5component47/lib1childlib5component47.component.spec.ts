import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1childlib5component47Component } from './lib1childlib5component47.component';

describe('Lib1childlib5component47Component', () => {
  let component: Lib1childlib5component47Component;
  let fixture: ComponentFixture<Lib1childlib5component47Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib1childlib5component47Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1childlib5component47Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
