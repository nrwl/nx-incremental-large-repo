import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { Lib0childlib7component28Component } from './lib0childlib7component28.component';

describe('Lib0childlib7component28Component', () => {
  let component: Lib0childlib7component28Component;
  let fixture: ComponentFixture<Lib0childlib7component28Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [Lib0childlib7component28Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0childlib7component28Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
