import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1childlib3component44Component } from './lib1childlib3component44.component';

describe('Lib1childlib3component44Component', () => {
  let component: Lib1childlib3component44Component;
  let fixture: ComponentFixture<Lib1childlib3component44Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib1childlib3component44Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1childlib3component44Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
