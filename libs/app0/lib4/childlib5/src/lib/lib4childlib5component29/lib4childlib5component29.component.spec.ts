import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib4childlib5component29Component } from './lib4childlib5component29.component';

describe('Lib4childlib5component29Component', () => {
  let component: Lib4childlib5component29Component;
  let fixture: ComponentFixture<Lib4childlib5component29Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib4childlib5component29Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib4childlib5component29Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
