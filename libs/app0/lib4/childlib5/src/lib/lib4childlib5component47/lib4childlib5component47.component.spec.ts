import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib4childlib5component47Component } from './lib4childlib5component47.component';

describe('Lib4childlib5component47Component', () => {
  let component: Lib4childlib5component47Component;
  let fixture: ComponentFixture<Lib4childlib5component47Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib4childlib5component47Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib4childlib5component47Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
