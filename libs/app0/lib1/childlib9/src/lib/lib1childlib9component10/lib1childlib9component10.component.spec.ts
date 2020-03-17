import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1childlib9component10Component } from './lib1childlib9component10.component';

describe('Lib1childlib9component10Component', () => {
  let component: Lib1childlib9component10Component;
  let fixture: ComponentFixture<Lib1childlib9component10Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib1childlib9component10Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1childlib9component10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
