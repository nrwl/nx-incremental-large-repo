import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { Lib1childlib3component49Component } from './lib1childlib3component49.component';

describe('Lib1childlib3component49Component', () => {
  let component: Lib1childlib3component49Component;
  let fixture: ComponentFixture<Lib1childlib3component49Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [Lib1childlib3component49Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1childlib3component49Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
