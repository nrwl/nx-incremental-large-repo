import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { Lib0childlib2component22Component } from './lib0childlib2component22.component';

describe('Lib0childlib2component22Component', () => {
  let component: Lib0childlib2component22Component;
  let fixture: ComponentFixture<Lib0childlib2component22Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [Lib0childlib2component22Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0childlib2component22Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
