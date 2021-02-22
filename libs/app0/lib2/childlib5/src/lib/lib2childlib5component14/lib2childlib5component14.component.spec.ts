import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { Lib2childlib5component14Component } from './lib2childlib5component14.component';

describe('Lib2childlib5component14Component', () => {
  let component: Lib2childlib5component14Component;
  let fixture: ComponentFixture<Lib2childlib5component14Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [Lib2childlib5component14Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2childlib5component14Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
