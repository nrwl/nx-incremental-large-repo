import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0childlib4component47Component } from './lib0childlib4component47.component';

describe('Lib0childlib4component47Component', () => {
  let component: Lib0childlib4component47Component;
  let fixture: ComponentFixture<Lib0childlib4component47Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib0childlib4component47Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0childlib4component47Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
