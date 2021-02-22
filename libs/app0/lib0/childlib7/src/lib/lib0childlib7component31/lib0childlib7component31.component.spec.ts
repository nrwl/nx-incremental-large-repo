import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { Lib0childlib7component31Component } from './lib0childlib7component31.component';

describe('Lib0childlib7component31Component', () => {
  let component: Lib0childlib7component31Component;
  let fixture: ComponentFixture<Lib0childlib7component31Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [Lib0childlib7component31Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0childlib7component31Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
