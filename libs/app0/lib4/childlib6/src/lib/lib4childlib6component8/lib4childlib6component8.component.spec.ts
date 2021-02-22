import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { Lib4childlib6component8Component } from './lib4childlib6component8.component';

describe('Lib4childlib6component8Component', () => {
  let component: Lib4childlib6component8Component;
  let fixture: ComponentFixture<Lib4childlib6component8Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [Lib4childlib6component8Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib4childlib6component8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
