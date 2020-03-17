import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib3childlib3component44Component } from './lib3childlib3component44.component';

describe('Lib3childlib3component44Component', () => {
  let component: Lib3childlib3component44Component;
  let fixture: ComponentFixture<Lib3childlib3component44Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib3childlib3component44Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib3childlib3component44Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
