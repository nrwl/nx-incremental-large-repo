import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { Lib0childlib7component11Component } from './lib0childlib7component11.component';

describe('Lib0childlib7component11Component', () => {
  let component: Lib0childlib7component11Component;
  let fixture: ComponentFixture<Lib0childlib7component11Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [Lib0childlib7component11Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0childlib7component11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
