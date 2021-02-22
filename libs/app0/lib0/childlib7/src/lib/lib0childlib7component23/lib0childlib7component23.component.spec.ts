import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { Lib0childlib7component23Component } from './lib0childlib7component23.component';

describe('Lib0childlib7component23Component', () => {
  let component: Lib0childlib7component23Component;
  let fixture: ComponentFixture<Lib0childlib7component23Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [Lib0childlib7component23Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0childlib7component23Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
