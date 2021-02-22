import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { Lib4childlib5component44Component } from './lib4childlib5component44.component';

describe('Lib4childlib5component44Component', () => {
  let component: Lib4childlib5component44Component;
  let fixture: ComponentFixture<Lib4childlib5component44Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [Lib4childlib5component44Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib4childlib5component44Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
