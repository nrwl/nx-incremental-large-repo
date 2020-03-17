import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib4childlib9component44Component } from './lib4childlib9component44.component';

describe('Lib4childlib9component44Component', () => {
  let component: Lib4childlib9component44Component;
  let fixture: ComponentFixture<Lib4childlib9component44Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib4childlib9component44Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib4childlib9component44Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
