import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib4childlib4component32Component } from './lib4childlib4component32.component';

describe('Lib4childlib4component32Component', () => {
  let component: Lib4childlib4component32Component;
  let fixture: ComponentFixture<Lib4childlib4component32Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib4childlib4component32Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib4childlib4component32Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
