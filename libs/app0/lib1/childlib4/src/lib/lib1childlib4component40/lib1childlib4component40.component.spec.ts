import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1childlib4component40Component } from './lib1childlib4component40.component';

describe('Lib1childlib4component40Component', () => {
  let component: Lib1childlib4component40Component;
  let fixture: ComponentFixture<Lib1childlib4component40Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib1childlib4component40Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1childlib4component40Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
