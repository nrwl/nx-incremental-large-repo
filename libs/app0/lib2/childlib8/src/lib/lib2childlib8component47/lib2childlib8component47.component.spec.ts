import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { Lib2childlib8component47Component } from './lib2childlib8component47.component';

describe('Lib2childlib8component47Component', () => {
  let component: Lib2childlib8component47Component;
  let fixture: ComponentFixture<Lib2childlib8component47Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [Lib2childlib8component47Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2childlib8component47Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
