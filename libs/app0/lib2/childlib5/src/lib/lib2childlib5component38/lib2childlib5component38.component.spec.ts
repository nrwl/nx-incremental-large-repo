import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2childlib5component38Component } from './lib2childlib5component38.component';

describe('Lib2childlib5component38Component', () => {
  let component: Lib2childlib5component38Component;
  let fixture: ComponentFixture<Lib2childlib5component38Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib2childlib5component38Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2childlib5component38Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
