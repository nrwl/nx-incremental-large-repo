import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1childlib9component21Component } from './lib1childlib9component21.component';

describe('Lib1childlib9component21Component', () => {
  let component: Lib1childlib9component21Component;
  let fixture: ComponentFixture<Lib1childlib9component21Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib1childlib9component21Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1childlib9component21Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
