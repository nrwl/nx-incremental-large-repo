import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1childlib3component18Component } from './lib1childlib3component18.component';

describe('Lib1childlib3component18Component', () => {
  let component: Lib1childlib3component18Component;
  let fixture: ComponentFixture<Lib1childlib3component18Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib1childlib3component18Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1childlib3component18Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
