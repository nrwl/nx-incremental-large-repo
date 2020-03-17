import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0childlib5component8Component } from './lib0childlib5component8.component';

describe('Lib0childlib5component8Component', () => {
  let component: Lib0childlib5component8Component;
  let fixture: ComponentFixture<Lib0childlib5component8Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib0childlib5component8Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0childlib5component8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
