import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { Lib0childlib0component38Component } from './lib0childlib0component38.component';

describe('Lib0childlib0component38Component', () => {
  let component: Lib0childlib0component38Component;
  let fixture: ComponentFixture<Lib0childlib0component38Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [Lib0childlib0component38Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0childlib0component38Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
