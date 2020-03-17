import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1childlib4component26Component } from './lib1childlib4component26.component';

describe('Lib1childlib4component26Component', () => {
  let component: Lib1childlib4component26Component;
  let fixture: ComponentFixture<Lib1childlib4component26Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib1childlib4component26Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1childlib4component26Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
