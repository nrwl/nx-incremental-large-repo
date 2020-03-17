import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2childlib9component27Component } from './lib2childlib9component27.component';

describe('Lib2childlib9component27Component', () => {
  let component: Lib2childlib9component27Component;
  let fixture: ComponentFixture<Lib2childlib9component27Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib2childlib9component27Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2childlib9component27Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
