import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib3childlib9component0Component } from './lib3childlib9component0.component';

describe('Lib3childlib9component0Component', () => {
  let component: Lib3childlib9component0Component;
  let fixture: ComponentFixture<Lib3childlib9component0Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib3childlib9component0Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib3childlib9component0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
