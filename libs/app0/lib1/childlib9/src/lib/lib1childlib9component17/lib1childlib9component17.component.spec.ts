import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1childlib9component17Component } from './lib1childlib9component17.component';

describe('Lib1childlib9component17Component', () => {
  let component: Lib1childlib9component17Component;
  let fixture: ComponentFixture<Lib1childlib9component17Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib1childlib9component17Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1childlib9component17Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
