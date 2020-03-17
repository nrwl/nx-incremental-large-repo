import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1childlib0component44Component } from './lib1childlib0component44.component';

describe('Lib1childlib0component44Component', () => {
  let component: Lib1childlib0component44Component;
  let fixture: ComponentFixture<Lib1childlib0component44Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib1childlib0component44Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1childlib0component44Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
