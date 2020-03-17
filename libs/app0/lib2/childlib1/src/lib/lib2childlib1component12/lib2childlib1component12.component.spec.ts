import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2childlib1component12Component } from './lib2childlib1component12.component';

describe('Lib2childlib1component12Component', () => {
  let component: Lib2childlib1component12Component;
  let fixture: ComponentFixture<Lib2childlib1component12Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib2childlib1component12Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2childlib1component12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
