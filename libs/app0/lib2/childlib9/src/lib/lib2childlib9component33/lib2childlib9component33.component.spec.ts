import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { Lib2childlib9component33Component } from './lib2childlib9component33.component';

describe('Lib2childlib9component33Component', () => {
  let component: Lib2childlib9component33Component;
  let fixture: ComponentFixture<Lib2childlib9component33Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [Lib2childlib9component33Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2childlib9component33Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
