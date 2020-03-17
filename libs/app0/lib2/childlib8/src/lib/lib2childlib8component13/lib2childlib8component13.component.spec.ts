import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2childlib8component13Component } from './lib2childlib8component13.component';

describe('Lib2childlib8component13Component', () => {
  let component: Lib2childlib8component13Component;
  let fixture: ComponentFixture<Lib2childlib8component13Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib2childlib8component13Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2childlib8component13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
