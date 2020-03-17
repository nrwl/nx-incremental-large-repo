import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib4childlib6component5Component } from './lib4childlib6component5.component';

describe('Lib4childlib6component5Component', () => {
  let component: Lib4childlib6component5Component;
  let fixture: ComponentFixture<Lib4childlib6component5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib4childlib6component5Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib4childlib6component5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
