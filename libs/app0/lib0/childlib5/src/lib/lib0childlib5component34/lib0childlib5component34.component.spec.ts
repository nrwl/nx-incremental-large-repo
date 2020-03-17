import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0childlib5component34Component } from './lib0childlib5component34.component';

describe('Lib0childlib5component34Component', () => {
  let component: Lib0childlib5component34Component;
  let fixture: ComponentFixture<Lib0childlib5component34Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib0childlib5component34Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0childlib5component34Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
