import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { Lib1childlib0component2Component } from './lib1childlib0component2.component';

describe('Lib1childlib0component2Component', () => {
  let component: Lib1childlib0component2Component;
  let fixture: ComponentFixture<Lib1childlib0component2Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [Lib1childlib0component2Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1childlib0component2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
