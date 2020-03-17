import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0childlib6component32Component } from './lib0childlib6component32.component';

describe('Lib0childlib6component32Component', () => {
  let component: Lib0childlib6component32Component;
  let fixture: ComponentFixture<Lib0childlib6component32Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib0childlib6component32Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0childlib6component32Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
