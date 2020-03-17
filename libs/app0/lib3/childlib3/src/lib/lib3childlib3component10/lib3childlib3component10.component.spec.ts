import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib3childlib3component10Component } from './lib3childlib3component10.component';

describe('Lib3childlib3component10Component', () => {
  let component: Lib3childlib3component10Component;
  let fixture: ComponentFixture<Lib3childlib3component10Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib3childlib3component10Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib3childlib3component10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
