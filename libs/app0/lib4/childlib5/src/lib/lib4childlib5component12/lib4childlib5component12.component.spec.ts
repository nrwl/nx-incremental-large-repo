import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib4childlib5component12Component } from './lib4childlib5component12.component';

describe('Lib4childlib5component12Component', () => {
  let component: Lib4childlib5component12Component;
  let fixture: ComponentFixture<Lib4childlib5component12Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib4childlib5component12Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib4childlib5component12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
