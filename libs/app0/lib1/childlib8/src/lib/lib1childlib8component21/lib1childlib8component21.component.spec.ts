import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { Lib1childlib8component21Component } from './lib1childlib8component21.component';

describe('Lib1childlib8component21Component', () => {
  let component: Lib1childlib8component21Component;
  let fixture: ComponentFixture<Lib1childlib8component21Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [Lib1childlib8component21Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1childlib8component21Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
