import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib4childlib5component27Component } from './lib4childlib5component27.component';

describe('Lib4childlib5component27Component', () => {
  let component: Lib4childlib5component27Component;
  let fixture: ComponentFixture<Lib4childlib5component27Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib4childlib5component27Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib4childlib5component27Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
