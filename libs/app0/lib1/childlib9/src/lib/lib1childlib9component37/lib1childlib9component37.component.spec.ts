import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1childlib9component37Component } from './lib1childlib9component37.component';

describe('Lib1childlib9component37Component', () => {
  let component: Lib1childlib9component37Component;
  let fixture: ComponentFixture<Lib1childlib9component37Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib1childlib9component37Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1childlib9component37Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
