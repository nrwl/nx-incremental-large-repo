import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0childlib5component25Component } from './lib0childlib5component25.component';

describe('Lib0childlib5component25Component', () => {
  let component: Lib0childlib5component25Component;
  let fixture: ComponentFixture<Lib0childlib5component25Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib0childlib5component25Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0childlib5component25Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
