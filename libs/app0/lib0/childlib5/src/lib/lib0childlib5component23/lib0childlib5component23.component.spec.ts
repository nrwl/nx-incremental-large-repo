import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0childlib5component23Component } from './lib0childlib5component23.component';

describe('Lib0childlib5component23Component', () => {
  let component: Lib0childlib5component23Component;
  let fixture: ComponentFixture<Lib0childlib5component23Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib0childlib5component23Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0childlib5component23Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
