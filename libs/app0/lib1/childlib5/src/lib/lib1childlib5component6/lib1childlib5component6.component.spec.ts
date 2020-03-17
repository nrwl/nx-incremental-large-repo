import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1childlib5component6Component } from './lib1childlib5component6.component';

describe('Lib1childlib5component6Component', () => {
  let component: Lib1childlib5component6Component;
  let fixture: ComponentFixture<Lib1childlib5component6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib1childlib5component6Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1childlib5component6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
