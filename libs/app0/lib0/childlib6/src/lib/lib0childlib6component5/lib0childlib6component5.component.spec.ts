import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0childlib6component5Component } from './lib0childlib6component5.component';

describe('Lib0childlib6component5Component', () => {
  let component: Lib0childlib6component5Component;
  let fixture: ComponentFixture<Lib0childlib6component5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib0childlib6component5Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0childlib6component5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
