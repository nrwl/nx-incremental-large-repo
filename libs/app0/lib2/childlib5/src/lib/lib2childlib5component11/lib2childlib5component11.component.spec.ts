import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2childlib5component11Component } from './lib2childlib5component11.component';

describe('Lib2childlib5component11Component', () => {
  let component: Lib2childlib5component11Component;
  let fixture: ComponentFixture<Lib2childlib5component11Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib2childlib5component11Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2childlib5component11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
