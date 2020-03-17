import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib4childlib4component11Component } from './lib4childlib4component11.component';

describe('Lib4childlib4component11Component', () => {
  let component: Lib4childlib4component11Component;
  let fixture: ComponentFixture<Lib4childlib4component11Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib4childlib4component11Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib4childlib4component11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
