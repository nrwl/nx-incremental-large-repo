import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { Lib1childlib8component19Component } from './lib1childlib8component19.component';

describe('Lib1childlib8component19Component', () => {
  let component: Lib1childlib8component19Component;
  let fixture: ComponentFixture<Lib1childlib8component19Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [Lib1childlib8component19Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1childlib8component19Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
