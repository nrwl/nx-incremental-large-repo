import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0childlib1component23Component } from './lib0childlib1component23.component';

describe('Lib0childlib1component23Component', () => {
  let component: Lib0childlib1component23Component;
  let fixture: ComponentFixture<Lib0childlib1component23Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib0childlib1component23Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0childlib1component23Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
