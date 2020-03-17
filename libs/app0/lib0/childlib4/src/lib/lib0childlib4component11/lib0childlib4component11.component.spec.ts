import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0childlib4component11Component } from './lib0childlib4component11.component';

describe('Lib0childlib4component11Component', () => {
  let component: Lib0childlib4component11Component;
  let fixture: ComponentFixture<Lib0childlib4component11Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib0childlib4component11Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0childlib4component11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
