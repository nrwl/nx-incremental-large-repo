import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib4childlib8component14Component } from './lib4childlib8component14.component';

describe('Lib4childlib8component14Component', () => {
  let component: Lib4childlib8component14Component;
  let fixture: ComponentFixture<Lib4childlib8component14Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib4childlib8component14Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib4childlib8component14Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
