import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { Lib3childlib9component27Component } from './lib3childlib9component27.component';

describe('Lib3childlib9component27Component', () => {
  let component: Lib3childlib9component27Component;
  let fixture: ComponentFixture<Lib3childlib9component27Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [Lib3childlib9component27Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib3childlib9component27Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
