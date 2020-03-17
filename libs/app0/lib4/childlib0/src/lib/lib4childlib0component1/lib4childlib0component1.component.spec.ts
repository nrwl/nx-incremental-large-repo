import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib4childlib0component1Component } from './lib4childlib0component1.component';

describe('Lib4childlib0component1Component', () => {
  let component: Lib4childlib0component1Component;
  let fixture: ComponentFixture<Lib4childlib0component1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib4childlib0component1Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib4childlib0component1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
