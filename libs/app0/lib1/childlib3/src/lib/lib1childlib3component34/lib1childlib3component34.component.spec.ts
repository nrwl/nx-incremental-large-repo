import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1childlib3component34Component } from './lib1childlib3component34.component';

describe('Lib1childlib3component34Component', () => {
  let component: Lib1childlib3component34Component;
  let fixture: ComponentFixture<Lib1childlib3component34Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib1childlib3component34Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1childlib3component34Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
