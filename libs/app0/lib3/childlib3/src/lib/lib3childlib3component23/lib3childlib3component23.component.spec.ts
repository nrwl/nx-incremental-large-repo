import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib3childlib3component23Component } from './lib3childlib3component23.component';

describe('Lib3childlib3component23Component', () => {
  let component: Lib3childlib3component23Component;
  let fixture: ComponentFixture<Lib3childlib3component23Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib3childlib3component23Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib3childlib3component23Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
