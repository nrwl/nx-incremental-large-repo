import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib3childlib3component34Component } from './lib3childlib3component34.component';

describe('Lib3childlib3component34Component', () => {
  let component: Lib3childlib3component34Component;
  let fixture: ComponentFixture<Lib3childlib3component34Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib3childlib3component34Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib3childlib3component34Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
