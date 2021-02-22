import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { Lib3childlib9component44Component } from './lib3childlib9component44.component';

describe('Lib3childlib9component44Component', () => {
  let component: Lib3childlib9component44Component;
  let fixture: ComponentFixture<Lib3childlib9component44Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [Lib3childlib9component44Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib3childlib9component44Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
