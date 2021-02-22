import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { Lib0childlib6component2Component } from './lib0childlib6component2.component';

describe('Lib0childlib6component2Component', () => {
  let component: Lib0childlib6component2Component;
  let fixture: ComponentFixture<Lib0childlib6component2Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [Lib0childlib6component2Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0childlib6component2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
