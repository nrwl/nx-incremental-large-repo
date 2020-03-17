import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0childlib7component1Component } from './lib0childlib7component1.component';

describe('Lib0childlib7component1Component', () => {
  let component: Lib0childlib7component1Component;
  let fixture: ComponentFixture<Lib0childlib7component1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib0childlib7component1Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0childlib7component1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
