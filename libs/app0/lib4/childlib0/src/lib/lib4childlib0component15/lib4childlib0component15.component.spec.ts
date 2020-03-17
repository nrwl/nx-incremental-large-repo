import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib4childlib0component15Component } from './lib4childlib0component15.component';

describe('Lib4childlib0component15Component', () => {
  let component: Lib4childlib0component15Component;
  let fixture: ComponentFixture<Lib4childlib0component15Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib4childlib0component15Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib4childlib0component15Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
