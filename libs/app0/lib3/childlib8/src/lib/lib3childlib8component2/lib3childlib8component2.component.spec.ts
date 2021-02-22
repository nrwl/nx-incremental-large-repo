import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { Lib3childlib8component2Component } from './lib3childlib8component2.component';

describe('Lib3childlib8component2Component', () => {
  let component: Lib3childlib8component2Component;
  let fixture: ComponentFixture<Lib3childlib8component2Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [Lib3childlib8component2Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib3childlib8component2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
