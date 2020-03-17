import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2childlib8component21Component } from './lib2childlib8component21.component';

describe('Lib2childlib8component21Component', () => {
  let component: Lib2childlib8component21Component;
  let fixture: ComponentFixture<Lib2childlib8component21Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib2childlib8component21Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2childlib8component21Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
