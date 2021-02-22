import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { Lib2childlib9component24Component } from './lib2childlib9component24.component';

describe('Lib2childlib9component24Component', () => {
  let component: Lib2childlib9component24Component;
  let fixture: ComponentFixture<Lib2childlib9component24Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [Lib2childlib9component24Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2childlib9component24Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
