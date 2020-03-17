import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1childlib0component0Component } from './lib1childlib0component0.component';

describe('Lib1childlib0component0Component', () => {
  let component: Lib1childlib0component0Component;
  let fixture: ComponentFixture<Lib1childlib0component0Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib1childlib0component0Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1childlib0component0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
