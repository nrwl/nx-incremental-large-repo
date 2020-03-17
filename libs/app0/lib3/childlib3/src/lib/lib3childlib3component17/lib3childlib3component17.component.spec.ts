import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib3childlib3component17Component } from './lib3childlib3component17.component';

describe('Lib3childlib3component17Component', () => {
  let component: Lib3childlib3component17Component;
  let fixture: ComponentFixture<Lib3childlib3component17Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib3childlib3component17Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib3childlib3component17Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
