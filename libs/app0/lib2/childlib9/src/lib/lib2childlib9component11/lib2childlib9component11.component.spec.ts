import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2childlib9component11Component } from './lib2childlib9component11.component';

describe('Lib2childlib9component11Component', () => {
  let component: Lib2childlib9component11Component;
  let fixture: ComponentFixture<Lib2childlib9component11Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib2childlib9component11Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2childlib9component11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
