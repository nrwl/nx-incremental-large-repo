import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { Lib3childlib5component27Component } from './lib3childlib5component27.component';

describe('Lib3childlib5component27Component', () => {
  let component: Lib3childlib5component27Component;
  let fixture: ComponentFixture<Lib3childlib5component27Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [Lib3childlib5component27Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib3childlib5component27Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
