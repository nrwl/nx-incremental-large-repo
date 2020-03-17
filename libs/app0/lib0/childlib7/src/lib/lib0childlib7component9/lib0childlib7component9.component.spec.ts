import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0childlib7component9Component } from './lib0childlib7component9.component';

describe('Lib0childlib7component9Component', () => {
  let component: Lib0childlib7component9Component;
  let fixture: ComponentFixture<Lib0childlib7component9Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib0childlib7component9Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0childlib7component9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
