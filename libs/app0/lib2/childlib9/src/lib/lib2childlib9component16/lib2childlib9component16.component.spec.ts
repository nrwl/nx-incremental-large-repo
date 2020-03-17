import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2childlib9component16Component } from './lib2childlib9component16.component';

describe('Lib2childlib9component16Component', () => {
  let component: Lib2childlib9component16Component;
  let fixture: ComponentFixture<Lib2childlib9component16Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib2childlib9component16Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2childlib9component16Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
