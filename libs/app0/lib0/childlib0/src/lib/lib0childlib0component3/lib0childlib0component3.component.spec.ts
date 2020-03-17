import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0childlib0component3Component } from './lib0childlib0component3.component';

describe('Lib0childlib0component3Component', () => {
  let component: Lib0childlib0component3Component;
  let fixture: ComponentFixture<Lib0childlib0component3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib0childlib0component3Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0childlib0component3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
