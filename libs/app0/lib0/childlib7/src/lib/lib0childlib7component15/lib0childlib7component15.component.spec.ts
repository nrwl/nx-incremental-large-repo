import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { Lib0childlib7component15Component } from './lib0childlib7component15.component';

describe('Lib0childlib7component15Component', () => {
  let component: Lib0childlib7component15Component;
  let fixture: ComponentFixture<Lib0childlib7component15Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [Lib0childlib7component15Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0childlib7component15Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
