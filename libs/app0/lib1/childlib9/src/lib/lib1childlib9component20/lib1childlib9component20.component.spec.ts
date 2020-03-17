import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1childlib9component20Component } from './lib1childlib9component20.component';

describe('Lib1childlib9component20Component', () => {
  let component: Lib1childlib9component20Component;
  let fixture: ComponentFixture<Lib1childlib9component20Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib1childlib9component20Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1childlib9component20Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
