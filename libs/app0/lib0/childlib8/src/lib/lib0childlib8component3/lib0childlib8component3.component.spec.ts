import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0childlib8component3Component } from './lib0childlib8component3.component';

describe('Lib0childlib8component3Component', () => {
  let component: Lib0childlib8component3Component;
  let fixture: ComponentFixture<Lib0childlib8component3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib0childlib8component3Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0childlib8component3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
