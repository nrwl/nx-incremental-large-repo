import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib4childlib8component3Component } from './lib4childlib8component3.component';

describe('Lib4childlib8component3Component', () => {
  let component: Lib4childlib8component3Component;
  let fixture: ComponentFixture<Lib4childlib8component3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib4childlib8component3Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib4childlib8component3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
