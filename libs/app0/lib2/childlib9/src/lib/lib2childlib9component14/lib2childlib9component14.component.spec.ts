import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2childlib9component14Component } from './lib2childlib9component14.component';

describe('Lib2childlib9component14Component', () => {
  let component: Lib2childlib9component14Component;
  let fixture: ComponentFixture<Lib2childlib9component14Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib2childlib9component14Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2childlib9component14Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
