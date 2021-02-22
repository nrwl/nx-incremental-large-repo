import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { Lib1childlib5component5Component } from './lib1childlib5component5.component';

describe('Lib1childlib5component5Component', () => {
  let component: Lib1childlib5component5Component;
  let fixture: ComponentFixture<Lib1childlib5component5Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [Lib1childlib5component5Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1childlib5component5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
