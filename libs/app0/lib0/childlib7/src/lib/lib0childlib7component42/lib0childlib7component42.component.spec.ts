import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0childlib7component42Component } from './lib0childlib7component42.component';

describe('Lib0childlib7component42Component', () => {
  let component: Lib0childlib7component42Component;
  let fixture: ComponentFixture<Lib0childlib7component42Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib0childlib7component42Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0childlib7component42Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
