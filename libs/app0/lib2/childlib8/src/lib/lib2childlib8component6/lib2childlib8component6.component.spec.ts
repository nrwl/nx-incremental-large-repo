import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { Lib2childlib8component6Component } from './lib2childlib8component6.component';

describe('Lib2childlib8component6Component', () => {
  let component: Lib2childlib8component6Component;
  let fixture: ComponentFixture<Lib2childlib8component6Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [Lib2childlib8component6Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2childlib8component6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
