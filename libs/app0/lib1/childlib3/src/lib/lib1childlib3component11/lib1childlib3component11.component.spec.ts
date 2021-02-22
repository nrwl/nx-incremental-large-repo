import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { Lib1childlib3component11Component } from './lib1childlib3component11.component';

describe('Lib1childlib3component11Component', () => {
  let component: Lib1childlib3component11Component;
  let fixture: ComponentFixture<Lib1childlib3component11Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [Lib1childlib3component11Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1childlib3component11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
