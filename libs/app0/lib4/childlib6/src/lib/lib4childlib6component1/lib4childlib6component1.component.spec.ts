import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { Lib4childlib6component1Component } from './lib4childlib6component1.component';

describe('Lib4childlib6component1Component', () => {
  let component: Lib4childlib6component1Component;
  let fixture: ComponentFixture<Lib4childlib6component1Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [Lib4childlib6component1Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib4childlib6component1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
