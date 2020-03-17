import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2childlib9component20Component } from './lib2childlib9component20.component';

describe('Lib2childlib9component20Component', () => {
  let component: Lib2childlib9component20Component;
  let fixture: ComponentFixture<Lib2childlib9component20Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib2childlib9component20Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2childlib9component20Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
