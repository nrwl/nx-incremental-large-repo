import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { Lib2childlib8component16Component } from './lib2childlib8component16.component';

describe('Lib2childlib8component16Component', () => {
  let component: Lib2childlib8component16Component;
  let fixture: ComponentFixture<Lib2childlib8component16Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [Lib2childlib8component16Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2childlib8component16Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
