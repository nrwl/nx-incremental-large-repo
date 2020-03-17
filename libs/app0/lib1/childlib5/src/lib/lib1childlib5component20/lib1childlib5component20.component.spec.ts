import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1childlib5component20Component } from './lib1childlib5component20.component';

describe('Lib1childlib5component20Component', () => {
  let component: Lib1childlib5component20Component;
  let fixture: ComponentFixture<Lib1childlib5component20Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib1childlib5component20Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1childlib5component20Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
