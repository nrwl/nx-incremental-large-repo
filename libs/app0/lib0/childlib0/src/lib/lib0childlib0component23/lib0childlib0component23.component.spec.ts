import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { Lib0childlib0component23Component } from './lib0childlib0component23.component';

describe('Lib0childlib0component23Component', () => {
  let component: Lib0childlib0component23Component;
  let fixture: ComponentFixture<Lib0childlib0component23Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [Lib0childlib0component23Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0childlib0component23Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
