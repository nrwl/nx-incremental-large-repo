import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { Lib1childlib1component47Component } from './lib1childlib1component47.component';

describe('Lib1childlib1component47Component', () => {
  let component: Lib1childlib1component47Component;
  let fixture: ComponentFixture<Lib1childlib1component47Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [Lib1childlib1component47Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1childlib1component47Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
