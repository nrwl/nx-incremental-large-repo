import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { Lib2childlib0component20Component } from './lib2childlib0component20.component';

describe('Lib2childlib0component20Component', () => {
  let component: Lib2childlib0component20Component;
  let fixture: ComponentFixture<Lib2childlib0component20Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [Lib2childlib0component20Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2childlib0component20Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
