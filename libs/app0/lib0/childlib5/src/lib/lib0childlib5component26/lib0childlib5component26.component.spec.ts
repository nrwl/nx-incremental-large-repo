import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0childlib5component26Component } from './lib0childlib5component26.component';

describe('Lib0childlib5component26Component', () => {
  let component: Lib0childlib5component26Component;
  let fixture: ComponentFixture<Lib0childlib5component26Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib0childlib5component26Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0childlib5component26Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
