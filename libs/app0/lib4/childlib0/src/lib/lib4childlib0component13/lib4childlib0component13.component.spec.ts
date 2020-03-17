import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib4childlib0component13Component } from './lib4childlib0component13.component';

describe('Lib4childlib0component13Component', () => {
  let component: Lib4childlib0component13Component;
  let fixture: ComponentFixture<Lib4childlib0component13Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib4childlib0component13Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib4childlib0component13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
