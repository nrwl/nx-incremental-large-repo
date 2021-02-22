import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { Lib3childlib2component44Component } from './lib3childlib2component44.component';

describe('Lib3childlib2component44Component', () => {
  let component: Lib3childlib2component44Component;
  let fixture: ComponentFixture<Lib3childlib2component44Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [Lib3childlib2component44Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib3childlib2component44Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
