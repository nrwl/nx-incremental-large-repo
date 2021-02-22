import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { Lib1childlib4component6Component } from './lib1childlib4component6.component';

describe('Lib1childlib4component6Component', () => {
  let component: Lib1childlib4component6Component;
  let fixture: ComponentFixture<Lib1childlib4component6Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [Lib1childlib4component6Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1childlib4component6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
