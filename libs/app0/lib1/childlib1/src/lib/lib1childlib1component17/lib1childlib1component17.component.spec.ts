import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { Lib1childlib1component17Component } from './lib1childlib1component17.component';

describe('Lib1childlib1component17Component', () => {
  let component: Lib1childlib1component17Component;
  let fixture: ComponentFixture<Lib1childlib1component17Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [Lib1childlib1component17Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1childlib1component17Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
