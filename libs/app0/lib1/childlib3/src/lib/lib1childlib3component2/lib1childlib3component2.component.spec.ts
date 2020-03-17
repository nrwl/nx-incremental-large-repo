import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1childlib3component2Component } from './lib1childlib3component2.component';

describe('Lib1childlib3component2Component', () => {
  let component: Lib1childlib3component2Component;
  let fixture: ComponentFixture<Lib1childlib3component2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib1childlib3component2Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1childlib3component2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
