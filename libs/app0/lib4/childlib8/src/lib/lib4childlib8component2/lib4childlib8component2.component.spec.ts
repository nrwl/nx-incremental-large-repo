import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib4childlib8component2Component } from './lib4childlib8component2.component';

describe('Lib4childlib8component2Component', () => {
  let component: Lib4childlib8component2Component;
  let fixture: ComponentFixture<Lib4childlib8component2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib4childlib8component2Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib4childlib8component2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
