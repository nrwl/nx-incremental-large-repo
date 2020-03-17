import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib4childlib5component32Component } from './lib4childlib5component32.component';

describe('Lib4childlib5component32Component', () => {
  let component: Lib4childlib5component32Component;
  let fixture: ComponentFixture<Lib4childlib5component32Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib4childlib5component32Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib4childlib5component32Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
