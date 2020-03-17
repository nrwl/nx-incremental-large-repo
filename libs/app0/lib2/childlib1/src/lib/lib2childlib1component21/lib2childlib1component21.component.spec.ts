import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2childlib1component21Component } from './lib2childlib1component21.component';

describe('Lib2childlib1component21Component', () => {
  let component: Lib2childlib1component21Component;
  let fixture: ComponentFixture<Lib2childlib1component21Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib2childlib1component21Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2childlib1component21Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
