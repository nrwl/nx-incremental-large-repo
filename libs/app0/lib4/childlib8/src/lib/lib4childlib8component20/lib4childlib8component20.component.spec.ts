import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib4childlib8component20Component } from './lib4childlib8component20.component';

describe('Lib4childlib8component20Component', () => {
  let component: Lib4childlib8component20Component;
  let fixture: ComponentFixture<Lib4childlib8component20Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib4childlib8component20Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib4childlib8component20Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
