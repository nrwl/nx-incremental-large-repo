import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib3childlib3component6Component } from './lib3childlib3component6.component';

describe('Lib3childlib3component6Component', () => {
  let component: Lib3childlib3component6Component;
  let fixture: ComponentFixture<Lib3childlib3component6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib3childlib3component6Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib3childlib3component6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
