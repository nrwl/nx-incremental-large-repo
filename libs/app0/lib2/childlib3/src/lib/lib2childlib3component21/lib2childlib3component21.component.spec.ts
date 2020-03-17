import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2childlib3component21Component } from './lib2childlib3component21.component';

describe('Lib2childlib3component21Component', () => {
  let component: Lib2childlib3component21Component;
  let fixture: ComponentFixture<Lib2childlib3component21Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib2childlib3component21Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2childlib3component21Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
