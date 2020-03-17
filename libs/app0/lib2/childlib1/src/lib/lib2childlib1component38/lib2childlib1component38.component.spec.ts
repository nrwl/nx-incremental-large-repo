import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2childlib1component38Component } from './lib2childlib1component38.component';

describe('Lib2childlib1component38Component', () => {
  let component: Lib2childlib1component38Component;
  let fixture: ComponentFixture<Lib2childlib1component38Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib2childlib1component38Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2childlib1component38Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
