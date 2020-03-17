import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0childlib5component33Component } from './lib0childlib5component33.component';

describe('Lib0childlib5component33Component', () => {
  let component: Lib0childlib5component33Component;
  let fixture: ComponentFixture<Lib0childlib5component33Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib0childlib5component33Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0childlib5component33Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
