import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0childlib1component16Component } from './lib0childlib1component16.component';

describe('Lib0childlib1component16Component', () => {
  let component: Lib0childlib1component16Component;
  let fixture: ComponentFixture<Lib0childlib1component16Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib0childlib1component16Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0childlib1component16Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
