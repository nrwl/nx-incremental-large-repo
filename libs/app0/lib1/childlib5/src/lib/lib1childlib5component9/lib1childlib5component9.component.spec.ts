import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1childlib5component9Component } from './lib1childlib5component9.component';

describe('Lib1childlib5component9Component', () => {
  let component: Lib1childlib5component9Component;
  let fixture: ComponentFixture<Lib1childlib5component9Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib1childlib5component9Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1childlib5component9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
