import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2childlib0component48Component } from './lib2childlib0component48.component';

describe('Lib2childlib0component48Component', () => {
  let component: Lib2childlib0component48Component;
  let fixture: ComponentFixture<Lib2childlib0component48Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib2childlib0component48Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2childlib0component48Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
