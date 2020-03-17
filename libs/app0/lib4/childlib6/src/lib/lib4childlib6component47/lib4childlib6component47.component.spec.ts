import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib4childlib6component47Component } from './lib4childlib6component47.component';

describe('Lib4childlib6component47Component', () => {
  let component: Lib4childlib6component47Component;
  let fixture: ComponentFixture<Lib4childlib6component47Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib4childlib6component47Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib4childlib6component47Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
