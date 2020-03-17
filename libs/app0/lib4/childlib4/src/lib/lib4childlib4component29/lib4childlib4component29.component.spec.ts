import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib4childlib4component29Component } from './lib4childlib4component29.component';

describe('Lib4childlib4component29Component', () => {
  let component: Lib4childlib4component29Component;
  let fixture: ComponentFixture<Lib4childlib4component29Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib4childlib4component29Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib4childlib4component29Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
