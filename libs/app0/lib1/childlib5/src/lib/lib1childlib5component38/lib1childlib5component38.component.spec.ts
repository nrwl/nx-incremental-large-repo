import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1childlib5component38Component } from './lib1childlib5component38.component';

describe('Lib1childlib5component38Component', () => {
  let component: Lib1childlib5component38Component;
  let fixture: ComponentFixture<Lib1childlib5component38Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib1childlib5component38Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1childlib5component38Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
