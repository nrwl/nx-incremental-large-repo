import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1childlib5component18Component } from './lib1childlib5component18.component';

describe('Lib1childlib5component18Component', () => {
  let component: Lib1childlib5component18Component;
  let fixture: ComponentFixture<Lib1childlib5component18Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib1childlib5component18Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1childlib5component18Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
