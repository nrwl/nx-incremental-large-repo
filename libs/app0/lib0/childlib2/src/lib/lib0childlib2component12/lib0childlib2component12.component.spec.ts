import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { Lib0childlib2component12Component } from './lib0childlib2component12.component';

describe('Lib0childlib2component12Component', () => {
  let component: Lib0childlib2component12Component;
  let fixture: ComponentFixture<Lib0childlib2component12Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [Lib0childlib2component12Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0childlib2component12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
