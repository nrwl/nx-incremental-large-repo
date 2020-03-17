import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib4childlib8component35Component } from './lib4childlib8component35.component';

describe('Lib4childlib8component35Component', () => {
  let component: Lib4childlib8component35Component;
  let fixture: ComponentFixture<Lib4childlib8component35Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib4childlib8component35Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib4childlib8component35Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
