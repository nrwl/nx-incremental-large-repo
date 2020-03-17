import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib4childlib1component15Component } from './lib4childlib1component15.component';

describe('Lib4childlib1component15Component', () => {
  let component: Lib4childlib1component15Component;
  let fixture: ComponentFixture<Lib4childlib1component15Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib4childlib1component15Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib4childlib1component15Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
