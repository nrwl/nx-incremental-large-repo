import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { Lib1childlib0component45Component } from './lib1childlib0component45.component';

describe('Lib1childlib0component45Component', () => {
  let component: Lib1childlib0component45Component;
  let fixture: ComponentFixture<Lib1childlib0component45Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [Lib1childlib0component45Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1childlib0component45Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
