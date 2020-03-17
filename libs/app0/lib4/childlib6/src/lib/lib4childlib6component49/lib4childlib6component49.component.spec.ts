import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib4childlib6component49Component } from './lib4childlib6component49.component';

describe('Lib4childlib6component49Component', () => {
  let component: Lib4childlib6component49Component;
  let fixture: ComponentFixture<Lib4childlib6component49Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib4childlib6component49Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib4childlib6component49Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
