import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { Lib0childlib2component34Component } from './lib0childlib2component34.component';

describe('Lib0childlib2component34Component', () => {
  let component: Lib0childlib2component34Component;
  let fixture: ComponentFixture<Lib0childlib2component34Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [Lib0childlib2component34Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0childlib2component34Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
