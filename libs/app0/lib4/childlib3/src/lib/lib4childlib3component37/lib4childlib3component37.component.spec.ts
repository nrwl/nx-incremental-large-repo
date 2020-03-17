import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib4childlib3component37Component } from './lib4childlib3component37.component';

describe('Lib4childlib3component37Component', () => {
  let component: Lib4childlib3component37Component;
  let fixture: ComponentFixture<Lib4childlib3component37Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib4childlib3component37Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib4childlib3component37Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
