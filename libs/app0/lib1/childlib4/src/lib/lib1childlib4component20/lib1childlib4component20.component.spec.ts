import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1childlib4component20Component } from './lib1childlib4component20.component';

describe('Lib1childlib4component20Component', () => {
  let component: Lib1childlib4component20Component;
  let fixture: ComponentFixture<Lib1childlib4component20Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib1childlib4component20Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1childlib4component20Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
