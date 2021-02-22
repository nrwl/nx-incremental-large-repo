import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { Lib1childlib9component9Component } from './lib1childlib9component9.component';

describe('Lib1childlib9component9Component', () => {
  let component: Lib1childlib9component9Component;
  let fixture: ComponentFixture<Lib1childlib9component9Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [Lib1childlib9component9Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1childlib9component9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
