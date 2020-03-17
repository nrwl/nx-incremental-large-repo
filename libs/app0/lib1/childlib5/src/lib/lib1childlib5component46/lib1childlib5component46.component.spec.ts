import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1childlib5component46Component } from './lib1childlib5component46.component';

describe('Lib1childlib5component46Component', () => {
  let component: Lib1childlib5component46Component;
  let fixture: ComponentFixture<Lib1childlib5component46Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib1childlib5component46Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1childlib5component46Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
