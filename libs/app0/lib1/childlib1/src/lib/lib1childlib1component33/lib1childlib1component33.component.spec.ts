import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1childlib1component33Component } from './lib1childlib1component33.component';

describe('Lib1childlib1component33Component', () => {
  let component: Lib1childlib1component33Component;
  let fixture: ComponentFixture<Lib1childlib1component33Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib1childlib1component33Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1childlib1component33Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
