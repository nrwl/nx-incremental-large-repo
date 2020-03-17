import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib4childlib8component25Component } from './lib4childlib8component25.component';

describe('Lib4childlib8component25Component', () => {
  let component: Lib4childlib8component25Component;
  let fixture: ComponentFixture<Lib4childlib8component25Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib4childlib8component25Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib4childlib8component25Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
