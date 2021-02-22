import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { Lib4childlib6component20Component } from './lib4childlib6component20.component';

describe('Lib4childlib6component20Component', () => {
  let component: Lib4childlib6component20Component;
  let fixture: ComponentFixture<Lib4childlib6component20Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [Lib4childlib6component20Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib4childlib6component20Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
