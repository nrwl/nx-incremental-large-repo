import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1childlib4component49Component } from './lib1childlib4component49.component';

describe('Lib1childlib4component49Component', () => {
  let component: Lib1childlib4component49Component;
  let fixture: ComponentFixture<Lib1childlib4component49Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib1childlib4component49Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1childlib4component49Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
