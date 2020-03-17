import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2childlib8component2Component } from './lib2childlib8component2.component';

describe('Lib2childlib8component2Component', () => {
  let component: Lib2childlib8component2Component;
  let fixture: ComponentFixture<Lib2childlib8component2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib2childlib8component2Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2childlib8component2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
