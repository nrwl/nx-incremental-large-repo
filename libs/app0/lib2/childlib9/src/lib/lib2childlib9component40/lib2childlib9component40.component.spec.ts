import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2childlib9component40Component } from './lib2childlib9component40.component';

describe('Lib2childlib9component40Component', () => {
  let component: Lib2childlib9component40Component;
  let fixture: ComponentFixture<Lib2childlib9component40Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib2childlib9component40Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2childlib9component40Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
