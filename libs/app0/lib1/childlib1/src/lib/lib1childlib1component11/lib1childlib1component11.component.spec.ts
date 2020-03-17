import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1childlib1component11Component } from './lib1childlib1component11.component';

describe('Lib1childlib1component11Component', () => {
  let component: Lib1childlib1component11Component;
  let fixture: ComponentFixture<Lib1childlib1component11Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib1childlib1component11Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1childlib1component11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
