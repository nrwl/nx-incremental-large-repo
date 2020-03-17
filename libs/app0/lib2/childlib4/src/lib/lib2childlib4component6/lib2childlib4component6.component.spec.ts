import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2childlib4component6Component } from './lib2childlib4component6.component';

describe('Lib2childlib4component6Component', () => {
  let component: Lib2childlib4component6Component;
  let fixture: ComponentFixture<Lib2childlib4component6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib2childlib4component6Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2childlib4component6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
