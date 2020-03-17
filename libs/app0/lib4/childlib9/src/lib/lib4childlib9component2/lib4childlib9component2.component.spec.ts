import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib4childlib9component2Component } from './lib4childlib9component2.component';

describe('Lib4childlib9component2Component', () => {
  let component: Lib4childlib9component2Component;
  let fixture: ComponentFixture<Lib4childlib9component2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib4childlib9component2Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib4childlib9component2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
