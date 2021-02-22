import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { Lib0childlib5component19Component } from './lib0childlib5component19.component';

describe('Lib0childlib5component19Component', () => {
  let component: Lib0childlib5component19Component;
  let fixture: ComponentFixture<Lib0childlib5component19Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [Lib0childlib5component19Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0childlib5component19Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
