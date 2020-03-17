import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib4childlib0component42Component } from './lib4childlib0component42.component';

describe('Lib4childlib0component42Component', () => {
  let component: Lib4childlib0component42Component;
  let fixture: ComponentFixture<Lib4childlib0component42Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib4childlib0component42Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib4childlib0component42Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
