import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib3childlib1component0Component } from './lib3childlib1component0.component';

describe('Lib3childlib1component0Component', () => {
  let component: Lib3childlib1component0Component;
  let fixture: ComponentFixture<Lib3childlib1component0Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib3childlib1component0Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib3childlib1component0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
