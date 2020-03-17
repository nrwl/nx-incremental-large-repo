import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib4childlib4component33Component } from './lib4childlib4component33.component';

describe('Lib4childlib4component33Component', () => {
  let component: Lib4childlib4component33Component;
  let fixture: ComponentFixture<Lib4childlib4component33Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib4childlib4component33Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib4childlib4component33Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
