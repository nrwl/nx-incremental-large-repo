import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { Lib1childlib2component0Component } from './lib1childlib2component0.component';

describe('Lib1childlib2component0Component', () => {
  let component: Lib1childlib2component0Component;
  let fixture: ComponentFixture<Lib1childlib2component0Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [Lib1childlib2component0Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1childlib2component0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
