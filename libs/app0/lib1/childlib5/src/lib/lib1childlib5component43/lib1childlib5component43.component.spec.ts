import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1childlib5component43Component } from './lib1childlib5component43.component';

describe('Lib1childlib5component43Component', () => {
  let component: Lib1childlib5component43Component;
  let fixture: ComponentFixture<Lib1childlib5component43Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib1childlib5component43Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1childlib5component43Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
