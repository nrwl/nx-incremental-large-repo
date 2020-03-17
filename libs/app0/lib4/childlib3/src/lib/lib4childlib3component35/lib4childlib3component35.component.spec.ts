import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib4childlib3component35Component } from './lib4childlib3component35.component';

describe('Lib4childlib3component35Component', () => {
  let component: Lib4childlib3component35Component;
  let fixture: ComponentFixture<Lib4childlib3component35Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib4childlib3component35Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib4childlib3component35Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
