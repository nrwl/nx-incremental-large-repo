import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { Lib0childlib9component30Component } from './lib0childlib9component30.component';

describe('Lib0childlib9component30Component', () => {
  let component: Lib0childlib9component30Component;
  let fixture: ComponentFixture<Lib0childlib9component30Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [Lib0childlib9component30Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0childlib9component30Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
