import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { Lib3childlib9component18Component } from './lib3childlib9component18.component';

describe('Lib3childlib9component18Component', () => {
  let component: Lib3childlib9component18Component;
  let fixture: ComponentFixture<Lib3childlib9component18Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [Lib3childlib9component18Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib3childlib9component18Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
