import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib4childlib4component39Component } from './lib4childlib4component39.component';

describe('Lib4childlib4component39Component', () => {
  let component: Lib4childlib4component39Component;
  let fixture: ComponentFixture<Lib4childlib4component39Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib4childlib4component39Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib4childlib4component39Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
