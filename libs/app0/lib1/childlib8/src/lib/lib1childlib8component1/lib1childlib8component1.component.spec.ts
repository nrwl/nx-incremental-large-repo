import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1childlib8component1Component } from './lib1childlib8component1.component';

describe('Lib1childlib8component1Component', () => {
  let component: Lib1childlib8component1Component;
  let fixture: ComponentFixture<Lib1childlib8component1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib1childlib8component1Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1childlib8component1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
