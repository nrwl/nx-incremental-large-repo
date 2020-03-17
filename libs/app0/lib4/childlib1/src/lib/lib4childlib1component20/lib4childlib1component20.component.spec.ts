import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib4childlib1component20Component } from './lib4childlib1component20.component';

describe('Lib4childlib1component20Component', () => {
  let component: Lib4childlib1component20Component;
  let fixture: ComponentFixture<Lib4childlib1component20Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib4childlib1component20Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib4childlib1component20Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
