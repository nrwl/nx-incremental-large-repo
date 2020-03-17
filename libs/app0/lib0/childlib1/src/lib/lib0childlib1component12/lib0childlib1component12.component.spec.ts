import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0childlib1component12Component } from './lib0childlib1component12.component';

describe('Lib0childlib1component12Component', () => {
  let component: Lib0childlib1component12Component;
  let fixture: ComponentFixture<Lib0childlib1component12Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib0childlib1component12Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0childlib1component12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
