import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1childlib0component34Component } from './lib1childlib0component34.component';

describe('Lib1childlib0component34Component', () => {
  let component: Lib1childlib0component34Component;
  let fixture: ComponentFixture<Lib1childlib0component34Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib1childlib0component34Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1childlib0component34Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
