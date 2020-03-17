import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0childlib1component38Component } from './lib0childlib1component38.component';

describe('Lib0childlib1component38Component', () => {
  let component: Lib0childlib1component38Component;
  let fixture: ComponentFixture<Lib0childlib1component38Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib0childlib1component38Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0childlib1component38Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
