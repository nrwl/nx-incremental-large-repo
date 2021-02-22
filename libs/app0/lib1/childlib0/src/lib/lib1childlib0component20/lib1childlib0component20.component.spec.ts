import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { Lib1childlib0component20Component } from './lib1childlib0component20.component';

describe('Lib1childlib0component20Component', () => {
  let component: Lib1childlib0component20Component;
  let fixture: ComponentFixture<Lib1childlib0component20Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [Lib1childlib0component20Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1childlib0component20Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
