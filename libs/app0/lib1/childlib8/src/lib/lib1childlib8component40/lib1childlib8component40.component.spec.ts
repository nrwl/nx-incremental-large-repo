import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { Lib1childlib8component40Component } from './lib1childlib8component40.component';

describe('Lib1childlib8component40Component', () => {
  let component: Lib1childlib8component40Component;
  let fixture: ComponentFixture<Lib1childlib8component40Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [Lib1childlib8component40Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1childlib8component40Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
