import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib4childlib9component41Component } from './lib4childlib9component41.component';

describe('Lib4childlib9component41Component', () => {
  let component: Lib4childlib9component41Component;
  let fixture: ComponentFixture<Lib4childlib9component41Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib4childlib9component41Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib4childlib9component41Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
