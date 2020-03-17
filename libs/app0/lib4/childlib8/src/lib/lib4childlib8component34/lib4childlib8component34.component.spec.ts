import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib4childlib8component34Component } from './lib4childlib8component34.component';

describe('Lib4childlib8component34Component', () => {
  let component: Lib4childlib8component34Component;
  let fixture: ComponentFixture<Lib4childlib8component34Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib4childlib8component34Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib4childlib8component34Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
