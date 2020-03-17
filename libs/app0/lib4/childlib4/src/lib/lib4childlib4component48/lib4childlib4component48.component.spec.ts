import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib4childlib4component48Component } from './lib4childlib4component48.component';

describe('Lib4childlib4component48Component', () => {
  let component: Lib4childlib4component48Component;
  let fixture: ComponentFixture<Lib4childlib4component48Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib4childlib4component48Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib4childlib4component48Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
