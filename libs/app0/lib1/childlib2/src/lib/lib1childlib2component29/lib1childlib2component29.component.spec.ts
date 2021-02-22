import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { Lib1childlib2component29Component } from './lib1childlib2component29.component';

describe('Lib1childlib2component29Component', () => {
  let component: Lib1childlib2component29Component;
  let fixture: ComponentFixture<Lib1childlib2component29Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [Lib1childlib2component29Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1childlib2component29Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
