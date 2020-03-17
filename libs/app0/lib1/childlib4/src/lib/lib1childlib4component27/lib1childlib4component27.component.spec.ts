import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1childlib4component27Component } from './lib1childlib4component27.component';

describe('Lib1childlib4component27Component', () => {
  let component: Lib1childlib4component27Component;
  let fixture: ComponentFixture<Lib1childlib4component27Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib1childlib4component27Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1childlib4component27Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
