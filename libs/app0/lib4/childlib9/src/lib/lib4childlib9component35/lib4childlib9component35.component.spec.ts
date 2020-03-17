import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib4childlib9component35Component } from './lib4childlib9component35.component';

describe('Lib4childlib9component35Component', () => {
  let component: Lib4childlib9component35Component;
  let fixture: ComponentFixture<Lib4childlib9component35Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib4childlib9component35Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib4childlib9component35Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
