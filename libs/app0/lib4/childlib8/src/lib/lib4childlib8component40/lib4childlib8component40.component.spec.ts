import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib4childlib8component40Component } from './lib4childlib8component40.component';

describe('Lib4childlib8component40Component', () => {
  let component: Lib4childlib8component40Component;
  let fixture: ComponentFixture<Lib4childlib8component40Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib4childlib8component40Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib4childlib8component40Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
