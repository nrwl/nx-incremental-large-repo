import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { Lib0childlib5component42Component } from './lib0childlib5component42.component';

describe('Lib0childlib5component42Component', () => {
  let component: Lib0childlib5component42Component;
  let fixture: ComponentFixture<Lib0childlib5component42Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [Lib0childlib5component42Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0childlib5component42Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
