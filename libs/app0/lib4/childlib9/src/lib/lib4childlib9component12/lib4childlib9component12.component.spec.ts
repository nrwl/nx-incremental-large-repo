import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib4childlib9component12Component } from './lib4childlib9component12.component';

describe('Lib4childlib9component12Component', () => {
  let component: Lib4childlib9component12Component;
  let fixture: ComponentFixture<Lib4childlib9component12Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib4childlib9component12Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib4childlib9component12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
