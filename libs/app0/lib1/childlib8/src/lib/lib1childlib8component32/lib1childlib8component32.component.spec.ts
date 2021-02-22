import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { Lib1childlib8component32Component } from './lib1childlib8component32.component';

describe('Lib1childlib8component32Component', () => {
  let component: Lib1childlib8component32Component;
  let fixture: ComponentFixture<Lib1childlib8component32Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [Lib1childlib8component32Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1childlib8component32Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
