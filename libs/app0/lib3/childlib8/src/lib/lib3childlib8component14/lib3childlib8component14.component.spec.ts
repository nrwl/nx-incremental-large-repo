import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { Lib3childlib8component14Component } from './lib3childlib8component14.component';

describe('Lib3childlib8component14Component', () => {
  let component: Lib3childlib8component14Component;
  let fixture: ComponentFixture<Lib3childlib8component14Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [Lib3childlib8component14Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib3childlib8component14Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
