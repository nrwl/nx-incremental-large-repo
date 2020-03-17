import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1childlib3component22Component } from './lib1childlib3component22.component';

describe('Lib1childlib3component22Component', () => {
  let component: Lib1childlib3component22Component;
  let fixture: ComponentFixture<Lib1childlib3component22Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib1childlib3component22Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1childlib3component22Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
