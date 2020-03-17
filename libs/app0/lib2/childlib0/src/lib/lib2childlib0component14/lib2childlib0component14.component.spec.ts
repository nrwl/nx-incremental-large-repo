import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2childlib0component14Component } from './lib2childlib0component14.component';

describe('Lib2childlib0component14Component', () => {
  let component: Lib2childlib0component14Component;
  let fixture: ComponentFixture<Lib2childlib0component14Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib2childlib0component14Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2childlib0component14Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
