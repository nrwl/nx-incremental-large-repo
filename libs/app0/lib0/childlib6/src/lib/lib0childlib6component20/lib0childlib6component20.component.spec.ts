import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0childlib6component20Component } from './lib0childlib6component20.component';

describe('Lib0childlib6component20Component', () => {
  let component: Lib0childlib6component20Component;
  let fixture: ComponentFixture<Lib0childlib6component20Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib0childlib6component20Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0childlib6component20Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
