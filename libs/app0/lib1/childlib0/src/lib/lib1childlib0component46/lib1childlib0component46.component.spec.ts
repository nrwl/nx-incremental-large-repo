import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { Lib1childlib0component46Component } from './lib1childlib0component46.component';

describe('Lib1childlib0component46Component', () => {
  let component: Lib1childlib0component46Component;
  let fixture: ComponentFixture<Lib1childlib0component46Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [Lib1childlib0component46Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1childlib0component46Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
