import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { Lib4childlib4component20Component } from './lib4childlib4component20.component';

describe('Lib4childlib4component20Component', () => {
  let component: Lib4childlib4component20Component;
  let fixture: ComponentFixture<Lib4childlib4component20Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [Lib4childlib4component20Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib4childlib4component20Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
