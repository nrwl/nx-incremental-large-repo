import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1childlib3component31Component } from './lib1childlib3component31.component';

describe('Lib1childlib3component31Component', () => {
  let component: Lib1childlib3component31Component;
  let fixture: ComponentFixture<Lib1childlib3component31Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib1childlib3component31Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1childlib3component31Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
