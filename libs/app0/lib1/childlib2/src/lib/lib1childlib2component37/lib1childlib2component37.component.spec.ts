import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { Lib1childlib2component37Component } from './lib1childlib2component37.component';

describe('Lib1childlib2component37Component', () => {
  let component: Lib1childlib2component37Component;
  let fixture: ComponentFixture<Lib1childlib2component37Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [Lib1childlib2component37Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1childlib2component37Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
