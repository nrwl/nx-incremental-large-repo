import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1childlib5component48Component } from './lib1childlib5component48.component';

describe('Lib1childlib5component48Component', () => {
  let component: Lib1childlib5component48Component;
  let fixture: ComponentFixture<Lib1childlib5component48Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib1childlib5component48Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1childlib5component48Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
