import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib4childlib8component23Component } from './lib4childlib8component23.component';

describe('Lib4childlib8component23Component', () => {
  let component: Lib4childlib8component23Component;
  let fixture: ComponentFixture<Lib4childlib8component23Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib4childlib8component23Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib4childlib8component23Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
