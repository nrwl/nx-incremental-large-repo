import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1childlib4component32Component } from './lib1childlib4component32.component';

describe('Lib1childlib4component32Component', () => {
  let component: Lib1childlib4component32Component;
  let fixture: ComponentFixture<Lib1childlib4component32Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib1childlib4component32Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1childlib4component32Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
