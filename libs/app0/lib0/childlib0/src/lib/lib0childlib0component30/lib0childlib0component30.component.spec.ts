import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0childlib0component30Component } from './lib0childlib0component30.component';

describe('Lib0childlib0component30Component', () => {
  let component: Lib0childlib0component30Component;
  let fixture: ComponentFixture<Lib0childlib0component30Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib0childlib0component30Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0childlib0component30Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
