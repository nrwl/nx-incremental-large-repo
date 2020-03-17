import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib4childlib9component3Component } from './lib4childlib9component3.component';

describe('Lib4childlib9component3Component', () => {
  let component: Lib4childlib9component3Component;
  let fixture: ComponentFixture<Lib4childlib9component3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib4childlib9component3Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib4childlib9component3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
