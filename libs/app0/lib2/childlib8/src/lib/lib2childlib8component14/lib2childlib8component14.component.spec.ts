import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2childlib8component14Component } from './lib2childlib8component14.component';

describe('Lib2childlib8component14Component', () => {
  let component: Lib2childlib8component14Component;
  let fixture: ComponentFixture<Lib2childlib8component14Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib2childlib8component14Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2childlib8component14Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
