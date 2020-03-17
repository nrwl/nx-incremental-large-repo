import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2childlib9component9Component } from './lib2childlib9component9.component';

describe('Lib2childlib9component9Component', () => {
  let component: Lib2childlib9component9Component;
  let fixture: ComponentFixture<Lib2childlib9component9Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib2childlib9component9Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2childlib9component9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
