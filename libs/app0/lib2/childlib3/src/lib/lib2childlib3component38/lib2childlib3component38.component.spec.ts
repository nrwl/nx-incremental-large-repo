import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2childlib3component38Component } from './lib2childlib3component38.component';

describe('Lib2childlib3component38Component', () => {
  let component: Lib2childlib3component38Component;
  let fixture: ComponentFixture<Lib2childlib3component38Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib2childlib3component38Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2childlib3component38Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
