import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0childlib1component40Component } from './lib0childlib1component40.component';

describe('Lib0childlib1component40Component', () => {
  let component: Lib0childlib1component40Component;
  let fixture: ComponentFixture<Lib0childlib1component40Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib0childlib1component40Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0childlib1component40Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
