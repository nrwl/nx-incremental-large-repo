import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0childlib7component8Component } from './lib0childlib7component8.component';

describe('Lib0childlib7component8Component', () => {
  let component: Lib0childlib7component8Component;
  let fixture: ComponentFixture<Lib0childlib7component8Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib0childlib7component8Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0childlib7component8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
