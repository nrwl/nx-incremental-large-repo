import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib4childlib6component36Component } from './lib4childlib6component36.component';

describe('Lib4childlib6component36Component', () => {
  let component: Lib4childlib6component36Component;
  let fixture: ComponentFixture<Lib4childlib6component36Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib4childlib6component36Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib4childlib6component36Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
