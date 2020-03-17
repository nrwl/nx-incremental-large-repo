import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib3childlib3component49Component } from './lib3childlib3component49.component';

describe('Lib3childlib3component49Component', () => {
  let component: Lib3childlib3component49Component;
  let fixture: ComponentFixture<Lib3childlib3component49Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib3childlib3component49Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib3childlib3component49Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
