import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1childlib0component16Component } from './lib1childlib0component16.component';

describe('Lib1childlib0component16Component', () => {
  let component: Lib1childlib0component16Component;
  let fixture: ComponentFixture<Lib1childlib0component16Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib1childlib0component16Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1childlib0component16Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
