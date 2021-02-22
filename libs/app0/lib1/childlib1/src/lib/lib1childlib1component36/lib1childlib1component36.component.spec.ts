import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { Lib1childlib1component36Component } from './lib1childlib1component36.component';

describe('Lib1childlib1component36Component', () => {
  let component: Lib1childlib1component36Component;
  let fixture: ComponentFixture<Lib1childlib1component36Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [Lib1childlib1component36Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1childlib1component36Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
