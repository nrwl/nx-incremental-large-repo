import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { Lib2childlib2component47Component } from './lib2childlib2component47.component';

describe('Lib2childlib2component47Component', () => {
  let component: Lib2childlib2component47Component;
  let fixture: ComponentFixture<Lib2childlib2component47Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [Lib2childlib2component47Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2childlib2component47Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
