import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { Lib2childlib2component25Component } from './lib2childlib2component25.component';

describe('Lib2childlib2component25Component', () => {
  let component: Lib2childlib2component25Component;
  let fixture: ComponentFixture<Lib2childlib2component25Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [Lib2childlib2component25Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2childlib2component25Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
