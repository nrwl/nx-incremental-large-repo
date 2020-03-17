import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1childlib0component7Component } from './lib1childlib0component7.component';

describe('Lib1childlib0component7Component', () => {
  let component: Lib1childlib0component7Component;
  let fixture: ComponentFixture<Lib1childlib0component7Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib1childlib0component7Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1childlib0component7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
