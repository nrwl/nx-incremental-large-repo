import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib4childlib8component38Component } from './lib4childlib8component38.component';

describe('Lib4childlib8component38Component', () => {
  let component: Lib4childlib8component38Component;
  let fixture: ComponentFixture<Lib4childlib8component38Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib4childlib8component38Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib4childlib8component38Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
