import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { Lib3childlib8component18Component } from './lib3childlib8component18.component';

describe('Lib3childlib8component18Component', () => {
  let component: Lib3childlib8component18Component;
  let fixture: ComponentFixture<Lib3childlib8component18Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [Lib3childlib8component18Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib3childlib8component18Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
