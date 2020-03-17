import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib4childlib5component45Component } from './lib4childlib5component45.component';

describe('Lib4childlib5component45Component', () => {
  let component: Lib4childlib5component45Component;
  let fixture: ComponentFixture<Lib4childlib5component45Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib4childlib5component45Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib4childlib5component45Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
