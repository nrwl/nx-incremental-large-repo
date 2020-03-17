import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib4childlib5component42Component } from './lib4childlib5component42.component';

describe('Lib4childlib5component42Component', () => {
  let component: Lib4childlib5component42Component;
  let fixture: ComponentFixture<Lib4childlib5component42Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib4childlib5component42Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib4childlib5component42Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
