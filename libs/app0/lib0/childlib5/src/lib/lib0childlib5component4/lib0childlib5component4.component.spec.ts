import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0childlib5component4Component } from './lib0childlib5component4.component';

describe('Lib0childlib5component4Component', () => {
  let component: Lib0childlib5component4Component;
  let fixture: ComponentFixture<Lib0childlib5component4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib0childlib5component4Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0childlib5component4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
