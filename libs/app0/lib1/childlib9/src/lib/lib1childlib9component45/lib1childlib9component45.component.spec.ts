import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1childlib9component45Component } from './lib1childlib9component45.component';

describe('Lib1childlib9component45Component', () => {
  let component: Lib1childlib9component45Component;
  let fixture: ComponentFixture<Lib1childlib9component45Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib1childlib9component45Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1childlib9component45Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
