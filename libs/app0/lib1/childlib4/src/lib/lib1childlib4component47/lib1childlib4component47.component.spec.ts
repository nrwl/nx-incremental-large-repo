import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { Lib1childlib4component47Component } from './lib1childlib4component47.component';

describe('Lib1childlib4component47Component', () => {
  let component: Lib1childlib4component47Component;
  let fixture: ComponentFixture<Lib1childlib4component47Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [Lib1childlib4component47Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1childlib4component47Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
