import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2childlib1component2Component } from './lib2childlib1component2.component';

describe('Lib2childlib1component2Component', () => {
  let component: Lib2childlib1component2Component;
  let fixture: ComponentFixture<Lib2childlib1component2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib2childlib1component2Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2childlib1component2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
