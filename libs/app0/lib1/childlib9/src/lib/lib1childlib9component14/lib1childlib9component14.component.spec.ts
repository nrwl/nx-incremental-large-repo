import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { Lib1childlib9component14Component } from './lib1childlib9component14.component';

describe('Lib1childlib9component14Component', () => {
  let component: Lib1childlib9component14Component;
  let fixture: ComponentFixture<Lib1childlib9component14Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [Lib1childlib9component14Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1childlib9component14Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
