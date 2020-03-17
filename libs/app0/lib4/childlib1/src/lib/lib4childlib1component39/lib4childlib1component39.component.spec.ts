import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib4childlib1component39Component } from './lib4childlib1component39.component';

describe('Lib4childlib1component39Component', () => {
  let component: Lib4childlib1component39Component;
  let fixture: ComponentFixture<Lib4childlib1component39Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib4childlib1component39Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib4childlib1component39Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
