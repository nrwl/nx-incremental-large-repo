import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib4childlib4component40Component } from './lib4childlib4component40.component';

describe('Lib4childlib4component40Component', () => {
  let component: Lib4childlib4component40Component;
  let fixture: ComponentFixture<Lib4childlib4component40Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib4childlib4component40Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib4childlib4component40Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
