import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { Lib1childlib2component33Component } from './lib1childlib2component33.component';

describe('Lib1childlib2component33Component', () => {
  let component: Lib1childlib2component33Component;
  let fixture: ComponentFixture<Lib1childlib2component33Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [Lib1childlib2component33Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1childlib2component33Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
