import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2childlib3component44Component } from './lib2childlib3component44.component';

describe('Lib2childlib3component44Component', () => {
  let component: Lib2childlib3component44Component;
  let fixture: ComponentFixture<Lib2childlib3component44Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib2childlib3component44Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2childlib3component44Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
