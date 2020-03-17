import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0childlib1component4Component } from './lib0childlib1component4.component';

describe('Lib0childlib1component4Component', () => {
  let component: Lib0childlib1component4Component;
  let fixture: ComponentFixture<Lib0childlib1component4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib0childlib1component4Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0childlib1component4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
