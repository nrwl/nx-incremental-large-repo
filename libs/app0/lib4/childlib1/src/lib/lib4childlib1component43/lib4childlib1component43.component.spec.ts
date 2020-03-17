import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib4childlib1component43Component } from './lib4childlib1component43.component';

describe('Lib4childlib1component43Component', () => {
  let component: Lib4childlib1component43Component;
  let fixture: ComponentFixture<Lib4childlib1component43Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib4childlib1component43Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib4childlib1component43Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
