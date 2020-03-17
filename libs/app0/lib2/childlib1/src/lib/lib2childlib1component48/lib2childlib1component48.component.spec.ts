import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2childlib1component48Component } from './lib2childlib1component48.component';

describe('Lib2childlib1component48Component', () => {
  let component: Lib2childlib1component48Component;
  let fixture: ComponentFixture<Lib2childlib1component48Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib2childlib1component48Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2childlib1component48Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
