import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib4childlib3component49Component } from './lib4childlib3component49.component';

describe('Lib4childlib3component49Component', () => {
  let component: Lib4childlib3component49Component;
  let fixture: ComponentFixture<Lib4childlib3component49Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib4childlib3component49Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib4childlib3component49Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
