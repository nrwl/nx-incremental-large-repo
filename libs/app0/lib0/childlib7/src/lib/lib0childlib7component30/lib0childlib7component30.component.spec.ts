import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0childlib7component30Component } from './lib0childlib7component30.component';

describe('Lib0childlib7component30Component', () => {
  let component: Lib0childlib7component30Component;
  let fixture: ComponentFixture<Lib0childlib7component30Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib0childlib7component30Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0childlib7component30Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
