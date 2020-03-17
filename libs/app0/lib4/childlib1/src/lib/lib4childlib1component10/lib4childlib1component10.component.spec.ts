import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib4childlib1component10Component } from './lib4childlib1component10.component';

describe('Lib4childlib1component10Component', () => {
  let component: Lib4childlib1component10Component;
  let fixture: ComponentFixture<Lib4childlib1component10Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib4childlib1component10Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib4childlib1component10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
