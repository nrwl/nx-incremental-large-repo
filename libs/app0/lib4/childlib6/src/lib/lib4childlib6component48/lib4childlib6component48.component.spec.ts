import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib4childlib6component48Component } from './lib4childlib6component48.component';

describe('Lib4childlib6component48Component', () => {
  let component: Lib4childlib6component48Component;
  let fixture: ComponentFixture<Lib4childlib6component48Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib4childlib6component48Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib4childlib6component48Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
