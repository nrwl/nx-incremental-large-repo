import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { Lib2childlib0component1Component } from './lib2childlib0component1.component';

describe('Lib2childlib0component1Component', () => {
  let component: Lib2childlib0component1Component;
  let fixture: ComponentFixture<Lib2childlib0component1Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [Lib2childlib0component1Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2childlib0component1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
