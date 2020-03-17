import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1childlib1component27Component } from './lib1childlib1component27.component';

describe('Lib1childlib1component27Component', () => {
  let component: Lib1childlib1component27Component;
  let fixture: ComponentFixture<Lib1childlib1component27Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib1childlib1component27Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1childlib1component27Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
