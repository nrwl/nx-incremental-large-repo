import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib4childlib6component9Component } from './lib4childlib6component9.component';

describe('Lib4childlib6component9Component', () => {
  let component: Lib4childlib6component9Component;
  let fixture: ComponentFixture<Lib4childlib6component9Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib4childlib6component9Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib4childlib6component9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
