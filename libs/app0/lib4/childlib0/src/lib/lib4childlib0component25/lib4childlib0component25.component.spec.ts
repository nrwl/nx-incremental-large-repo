import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib4childlib0component25Component } from './lib4childlib0component25.component';

describe('Lib4childlib0component25Component', () => {
  let component: Lib4childlib0component25Component;
  let fixture: ComponentFixture<Lib4childlib0component25Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib4childlib0component25Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib4childlib0component25Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
