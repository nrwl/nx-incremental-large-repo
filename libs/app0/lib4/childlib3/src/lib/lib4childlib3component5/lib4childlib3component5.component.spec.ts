import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib4childlib3component5Component } from './lib4childlib3component5.component';

describe('Lib4childlib3component5Component', () => {
  let component: Lib4childlib3component5Component;
  let fixture: ComponentFixture<Lib4childlib3component5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib4childlib3component5Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib4childlib3component5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
