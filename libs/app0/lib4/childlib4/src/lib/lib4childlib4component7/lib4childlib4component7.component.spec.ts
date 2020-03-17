import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib4childlib4component7Component } from './lib4childlib4component7.component';

describe('Lib4childlib4component7Component', () => {
  let component: Lib4childlib4component7Component;
  let fixture: ComponentFixture<Lib4childlib4component7Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib4childlib4component7Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib4childlib4component7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
