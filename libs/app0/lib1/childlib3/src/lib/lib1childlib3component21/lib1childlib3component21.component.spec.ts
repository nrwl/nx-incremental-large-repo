import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1childlib3component21Component } from './lib1childlib3component21.component';

describe('Lib1childlib3component21Component', () => {
  let component: Lib1childlib3component21Component;
  let fixture: ComponentFixture<Lib1childlib3component21Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib1childlib3component21Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1childlib3component21Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
