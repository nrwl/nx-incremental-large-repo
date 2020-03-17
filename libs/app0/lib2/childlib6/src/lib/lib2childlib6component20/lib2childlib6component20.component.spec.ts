import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2childlib6component20Component } from './lib2childlib6component20.component';

describe('Lib2childlib6component20Component', () => {
  let component: Lib2childlib6component20Component;
  let fixture: ComponentFixture<Lib2childlib6component20Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib2childlib6component20Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2childlib6component20Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
