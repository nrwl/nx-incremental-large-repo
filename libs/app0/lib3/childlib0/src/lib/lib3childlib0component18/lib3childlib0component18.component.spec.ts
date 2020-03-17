import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib3childlib0component18Component } from './lib3childlib0component18.component';

describe('Lib3childlib0component18Component', () => {
  let component: Lib3childlib0component18Component;
  let fixture: ComponentFixture<Lib3childlib0component18Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib3childlib0component18Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib3childlib0component18Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
