import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0childlib8component33Component } from './lib0childlib8component33.component';

describe('Lib0childlib8component33Component', () => {
  let component: Lib0childlib8component33Component;
  let fixture: ComponentFixture<Lib0childlib8component33Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib0childlib8component33Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0childlib8component33Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
