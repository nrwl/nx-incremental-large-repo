import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib4childlib5component36Component } from './lib4childlib5component36.component';

describe('Lib4childlib5component36Component', () => {
  let component: Lib4childlib5component36Component;
  let fixture: ComponentFixture<Lib4childlib5component36Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib4childlib5component36Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib4childlib5component36Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
