import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1childlib0component11Component } from './lib1childlib0component11.component';

describe('Lib1childlib0component11Component', () => {
  let component: Lib1childlib0component11Component;
  let fixture: ComponentFixture<Lib1childlib0component11Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib1childlib0component11Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1childlib0component11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
