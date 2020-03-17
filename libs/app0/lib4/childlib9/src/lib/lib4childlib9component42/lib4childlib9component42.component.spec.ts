import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib4childlib9component42Component } from './lib4childlib9component42.component';

describe('Lib4childlib9component42Component', () => {
  let component: Lib4childlib9component42Component;
  let fixture: ComponentFixture<Lib4childlib9component42Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib4childlib9component42Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib4childlib9component42Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
