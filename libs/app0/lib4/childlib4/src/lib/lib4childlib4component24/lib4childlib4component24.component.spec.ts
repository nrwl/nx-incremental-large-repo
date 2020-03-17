import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib4childlib4component24Component } from './lib4childlib4component24.component';

describe('Lib4childlib4component24Component', () => {
  let component: Lib4childlib4component24Component;
  let fixture: ComponentFixture<Lib4childlib4component24Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib4childlib4component24Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib4childlib4component24Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
