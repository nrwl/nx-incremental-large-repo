import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2childlib5component25Component } from './lib2childlib5component25.component';

describe('Lib2childlib5component25Component', () => {
  let component: Lib2childlib5component25Component;
  let fixture: ComponentFixture<Lib2childlib5component25Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib2childlib5component25Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2childlib5component25Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
