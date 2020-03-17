import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2childlib8component0Component } from './lib2childlib8component0.component';

describe('Lib2childlib8component0Component', () => {
  let component: Lib2childlib8component0Component;
  let fixture: ComponentFixture<Lib2childlib8component0Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib2childlib8component0Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2childlib8component0Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
