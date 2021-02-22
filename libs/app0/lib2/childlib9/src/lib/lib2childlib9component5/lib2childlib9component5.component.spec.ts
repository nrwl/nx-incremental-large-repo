import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { Lib2childlib9component5Component } from './lib2childlib9component5.component';

describe('Lib2childlib9component5Component', () => {
  let component: Lib2childlib9component5Component;
  let fixture: ComponentFixture<Lib2childlib9component5Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [Lib2childlib9component5Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2childlib9component5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
