import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1childlib4component36Component } from './lib1childlib4component36.component';

describe('Lib1childlib4component36Component', () => {
  let component: Lib1childlib4component36Component;
  let fixture: ComponentFixture<Lib1childlib4component36Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib1childlib4component36Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1childlib4component36Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
