import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1childlib0component14Component } from './lib1childlib0component14.component';

describe('Lib1childlib0component14Component', () => {
  let component: Lib1childlib0component14Component;
  let fixture: ComponentFixture<Lib1childlib0component14Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib1childlib0component14Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1childlib0component14Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
