import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2childlib8component31Component } from './lib2childlib8component31.component';

describe('Lib2childlib8component31Component', () => {
  let component: Lib2childlib8component31Component;
  let fixture: ComponentFixture<Lib2childlib8component31Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib2childlib8component31Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2childlib8component31Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
