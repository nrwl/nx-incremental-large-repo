import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib4childlib3component1Component } from './lib4childlib3component1.component';

describe('Lib4childlib3component1Component', () => {
  let component: Lib4childlib3component1Component;
  let fixture: ComponentFixture<Lib4childlib3component1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib4childlib3component1Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib4childlib3component1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
