import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0childlib5component35Component } from './lib0childlib5component35.component';

describe('Lib0childlib5component35Component', () => {
  let component: Lib0childlib5component35Component;
  let fixture: ComponentFixture<Lib0childlib5component35Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib0childlib5component35Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0childlib5component35Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
