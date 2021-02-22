import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { Lib1childlib5component39Component } from './lib1childlib5component39.component';

describe('Lib1childlib5component39Component', () => {
  let component: Lib1childlib5component39Component;
  let fixture: ComponentFixture<Lib1childlib5component39Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [Lib1childlib5component39Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1childlib5component39Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
