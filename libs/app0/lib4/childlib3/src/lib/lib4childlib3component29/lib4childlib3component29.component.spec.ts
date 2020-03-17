import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib4childlib3component29Component } from './lib4childlib3component29.component';

describe('Lib4childlib3component29Component', () => {
  let component: Lib4childlib3component29Component;
  let fixture: ComponentFixture<Lib4childlib3component29Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib4childlib3component29Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib4childlib3component29Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
