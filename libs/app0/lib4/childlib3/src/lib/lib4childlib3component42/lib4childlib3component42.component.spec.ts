import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib4childlib3component42Component } from './lib4childlib3component42.component';

describe('Lib4childlib3component42Component', () => {
  let component: Lib4childlib3component42Component;
  let fixture: ComponentFixture<Lib4childlib3component42Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib4childlib3component42Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib4childlib3component42Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
