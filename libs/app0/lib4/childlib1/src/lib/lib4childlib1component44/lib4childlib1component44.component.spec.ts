import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib4childlib1component44Component } from './lib4childlib1component44.component';

describe('Lib4childlib1component44Component', () => {
  let component: Lib4childlib1component44Component;
  let fixture: ComponentFixture<Lib4childlib1component44Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib4childlib1component44Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib4childlib1component44Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
