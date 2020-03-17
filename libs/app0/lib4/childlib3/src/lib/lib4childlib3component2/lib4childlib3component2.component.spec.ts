import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib4childlib3component2Component } from './lib4childlib3component2.component';

describe('Lib4childlib3component2Component', () => {
  let component: Lib4childlib3component2Component;
  let fixture: ComponentFixture<Lib4childlib3component2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib4childlib3component2Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib4childlib3component2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
