import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib4childlib5component2Component } from './lib4childlib5component2.component';

describe('Lib4childlib5component2Component', () => {
  let component: Lib4childlib5component2Component;
  let fixture: ComponentFixture<Lib4childlib5component2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib4childlib5component2Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib4childlib5component2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
