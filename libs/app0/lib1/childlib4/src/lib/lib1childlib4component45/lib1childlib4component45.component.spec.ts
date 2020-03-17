import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1childlib4component45Component } from './lib1childlib4component45.component';

describe('Lib1childlib4component45Component', () => {
  let component: Lib1childlib4component45Component;
  let fixture: ComponentFixture<Lib1childlib4component45Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib1childlib4component45Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1childlib4component45Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
