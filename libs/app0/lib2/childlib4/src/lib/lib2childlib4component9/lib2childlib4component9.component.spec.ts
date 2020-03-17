import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2childlib4component9Component } from './lib2childlib4component9.component';

describe('Lib2childlib4component9Component', () => {
  let component: Lib2childlib4component9Component;
  let fixture: ComponentFixture<Lib2childlib4component9Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib2childlib4component9Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2childlib4component9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
