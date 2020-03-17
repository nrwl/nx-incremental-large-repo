import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2childlib9component26Component } from './lib2childlib9component26.component';

describe('Lib2childlib9component26Component', () => {
  let component: Lib2childlib9component26Component;
  let fixture: ComponentFixture<Lib2childlib9component26Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib2childlib9component26Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2childlib9component26Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
