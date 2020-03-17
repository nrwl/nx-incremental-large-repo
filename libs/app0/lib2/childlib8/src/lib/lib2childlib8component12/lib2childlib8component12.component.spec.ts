import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2childlib8component12Component } from './lib2childlib8component12.component';

describe('Lib2childlib8component12Component', () => {
  let component: Lib2childlib8component12Component;
  let fixture: ComponentFixture<Lib2childlib8component12Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib2childlib8component12Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2childlib8component12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
