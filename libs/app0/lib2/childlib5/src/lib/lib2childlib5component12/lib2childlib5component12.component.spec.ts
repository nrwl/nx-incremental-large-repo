import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { Lib2childlib5component12Component } from './lib2childlib5component12.component';

describe('Lib2childlib5component12Component', () => {
  let component: Lib2childlib5component12Component;
  let fixture: ComponentFixture<Lib2childlib5component12Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [Lib2childlib5component12Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2childlib5component12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
