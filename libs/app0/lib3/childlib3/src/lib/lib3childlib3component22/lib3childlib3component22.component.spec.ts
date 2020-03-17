import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib3childlib3component22Component } from './lib3childlib3component22.component';

describe('Lib3childlib3component22Component', () => {
  let component: Lib3childlib3component22Component;
  let fixture: ComponentFixture<Lib3childlib3component22Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib3childlib3component22Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib3childlib3component22Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
