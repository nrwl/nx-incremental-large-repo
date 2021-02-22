import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { Lib0childlib6component38Component } from './lib0childlib6component38.component';

describe('Lib0childlib6component38Component', () => {
  let component: Lib0childlib6component38Component;
  let fixture: ComponentFixture<Lib0childlib6component38Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [Lib0childlib6component38Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0childlib6component38Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
