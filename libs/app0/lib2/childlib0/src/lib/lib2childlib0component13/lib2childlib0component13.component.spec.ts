import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2childlib0component13Component } from './lib2childlib0component13.component';

describe('Lib2childlib0component13Component', () => {
  let component: Lib2childlib0component13Component;
  let fixture: ComponentFixture<Lib2childlib0component13Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib2childlib0component13Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2childlib0component13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
