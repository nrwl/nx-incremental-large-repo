import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib3childlib3component47Component } from './lib3childlib3component47.component';

describe('Lib3childlib3component47Component', () => {
  let component: Lib3childlib3component47Component;
  let fixture: ComponentFixture<Lib3childlib3component47Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib3childlib3component47Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib3childlib3component47Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
