import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib4childlib0component44Component } from './lib4childlib0component44.component';

describe('Lib4childlib0component44Component', () => {
  let component: Lib4childlib0component44Component;
  let fixture: ComponentFixture<Lib4childlib0component44Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib4childlib0component44Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib4childlib0component44Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
