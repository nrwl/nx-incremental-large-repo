import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib4childlib3component17Component } from './lib4childlib3component17.component';

describe('Lib4childlib3component17Component', () => {
  let component: Lib4childlib3component17Component;
  let fixture: ComponentFixture<Lib4childlib3component17Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib4childlib3component17Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib4childlib3component17Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
