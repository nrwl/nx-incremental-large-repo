import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { Lib2childlib9component7Component } from './lib2childlib9component7.component';

describe('Lib2childlib9component7Component', () => {
  let component: Lib2childlib9component7Component;
  let fixture: ComponentFixture<Lib2childlib9component7Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [Lib2childlib9component7Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2childlib9component7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
