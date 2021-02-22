import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { Lib1childlib1component38Component } from './lib1childlib1component38.component';

describe('Lib1childlib1component38Component', () => {
  let component: Lib1childlib1component38Component;
  let fixture: ComponentFixture<Lib1childlib1component38Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [Lib1childlib1component38Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1childlib1component38Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
