import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib4childlib0component37Component } from './lib4childlib0component37.component';

describe('Lib4childlib0component37Component', () => {
  let component: Lib4childlib0component37Component;
  let fixture: ComponentFixture<Lib4childlib0component37Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib4childlib0component37Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib4childlib0component37Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
