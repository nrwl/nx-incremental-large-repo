import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { Lib2childlib2component9Component } from './lib2childlib2component9.component';

describe('Lib2childlib2component9Component', () => {
  let component: Lib2childlib2component9Component;
  let fixture: ComponentFixture<Lib2childlib2component9Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [Lib2childlib2component9Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2childlib2component9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
