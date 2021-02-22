import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { Lib2childlib8component49Component } from './lib2childlib8component49.component';

describe('Lib2childlib8component49Component', () => {
  let component: Lib2childlib8component49Component;
  let fixture: ComponentFixture<Lib2childlib8component49Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [Lib2childlib8component49Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2childlib8component49Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
