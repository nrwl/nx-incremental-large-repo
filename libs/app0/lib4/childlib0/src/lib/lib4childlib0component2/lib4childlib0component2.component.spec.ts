import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { Lib4childlib0component2Component } from './lib4childlib0component2.component';

describe('Lib4childlib0component2Component', () => {
  let component: Lib4childlib0component2Component;
  let fixture: ComponentFixture<Lib4childlib0component2Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [Lib4childlib0component2Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib4childlib0component2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
