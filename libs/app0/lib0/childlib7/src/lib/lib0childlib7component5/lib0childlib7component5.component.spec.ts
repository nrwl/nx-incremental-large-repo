import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0childlib7component5Component } from './lib0childlib7component5.component';

describe('Lib0childlib7component5Component', () => {
  let component: Lib0childlib7component5Component;
  let fixture: ComponentFixture<Lib0childlib7component5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib0childlib7component5Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0childlib7component5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
