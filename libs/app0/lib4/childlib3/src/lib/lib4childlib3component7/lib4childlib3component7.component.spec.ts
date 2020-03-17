import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib4childlib3component7Component } from './lib4childlib3component7.component';

describe('Lib4childlib3component7Component', () => {
  let component: Lib4childlib3component7Component;
  let fixture: ComponentFixture<Lib4childlib3component7Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib4childlib3component7Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib4childlib3component7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
