import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0childlib1component41Component } from './lib0childlib1component41.component';

describe('Lib0childlib1component41Component', () => {
  let component: Lib0childlib1component41Component;
  let fixture: ComponentFixture<Lib0childlib1component41Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib0childlib1component41Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0childlib1component41Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
