import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0childlib6component8Component } from './lib0childlib6component8.component';

describe('Lib0childlib6component8Component', () => {
  let component: Lib0childlib6component8Component;
  let fixture: ComponentFixture<Lib0childlib6component8Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib0childlib6component8Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0childlib6component8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
