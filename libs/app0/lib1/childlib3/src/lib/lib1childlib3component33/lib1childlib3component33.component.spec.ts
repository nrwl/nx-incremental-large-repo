import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1childlib3component33Component } from './lib1childlib3component33.component';

describe('Lib1childlib3component33Component', () => {
  let component: Lib1childlib3component33Component;
  let fixture: ComponentFixture<Lib1childlib3component33Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib1childlib3component33Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1childlib3component33Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
