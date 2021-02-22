import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { Lib3childlib9component47Component } from './lib3childlib9component47.component';

describe('Lib3childlib9component47Component', () => {
  let component: Lib3childlib9component47Component;
  let fixture: ComponentFixture<Lib3childlib9component47Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [Lib3childlib9component47Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib3childlib9component47Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
