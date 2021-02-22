import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { Lib3childlib3component21Component } from './lib3childlib3component21.component';

describe('Lib3childlib3component21Component', () => {
  let component: Lib3childlib3component21Component;
  let fixture: ComponentFixture<Lib3childlib3component21Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [Lib3childlib3component21Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib3childlib3component21Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
