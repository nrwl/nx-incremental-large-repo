import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2childlib6component9Component } from './lib2childlib6component9.component';

describe('Lib2childlib6component9Component', () => {
  let component: Lib2childlib6component9Component;
  let fixture: ComponentFixture<Lib2childlib6component9Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib2childlib6component9Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2childlib6component9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
