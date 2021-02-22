import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { Lib1childlib3component20Component } from './lib1childlib3component20.component';

describe('Lib1childlib3component20Component', () => {
  let component: Lib1childlib3component20Component;
  let fixture: ComponentFixture<Lib1childlib3component20Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [Lib1childlib3component20Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1childlib3component20Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
