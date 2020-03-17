import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib4childlib3component14Component } from './lib4childlib3component14.component';

describe('Lib4childlib3component14Component', () => {
  let component: Lib4childlib3component14Component;
  let fixture: ComponentFixture<Lib4childlib3component14Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib4childlib3component14Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib4childlib3component14Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
