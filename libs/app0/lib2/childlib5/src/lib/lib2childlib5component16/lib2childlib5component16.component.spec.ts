import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2childlib5component16Component } from './lib2childlib5component16.component';

describe('Lib2childlib5component16Component', () => {
  let component: Lib2childlib5component16Component;
  let fixture: ComponentFixture<Lib2childlib5component16Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib2childlib5component16Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2childlib5component16Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
