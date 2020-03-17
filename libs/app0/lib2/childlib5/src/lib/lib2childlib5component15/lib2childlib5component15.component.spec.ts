import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2childlib5component15Component } from './lib2childlib5component15.component';

describe('Lib2childlib5component15Component', () => {
  let component: Lib2childlib5component15Component;
  let fixture: ComponentFixture<Lib2childlib5component15Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib2childlib5component15Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2childlib5component15Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
