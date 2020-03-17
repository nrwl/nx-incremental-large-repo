import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib4childlib6component34Component } from './lib4childlib6component34.component';

describe('Lib4childlib6component34Component', () => {
  let component: Lib4childlib6component34Component;
  let fixture: ComponentFixture<Lib4childlib6component34Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib4childlib6component34Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib4childlib6component34Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
