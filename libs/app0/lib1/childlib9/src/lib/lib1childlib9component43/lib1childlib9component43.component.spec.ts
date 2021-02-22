import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { Lib1childlib9component43Component } from './lib1childlib9component43.component';

describe('Lib1childlib9component43Component', () => {
  let component: Lib1childlib9component43Component;
  let fixture: ComponentFixture<Lib1childlib9component43Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [Lib1childlib9component43Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1childlib9component43Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
