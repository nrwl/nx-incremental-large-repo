import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib4childlib3component36Component } from './lib4childlib3component36.component';

describe('Lib4childlib3component36Component', () => {
  let component: Lib4childlib3component36Component;
  let fixture: ComponentFixture<Lib4childlib3component36Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib4childlib3component36Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib4childlib3component36Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
