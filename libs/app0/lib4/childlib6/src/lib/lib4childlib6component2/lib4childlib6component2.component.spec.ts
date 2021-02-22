import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { Lib4childlib6component2Component } from './lib4childlib6component2.component';

describe('Lib4childlib6component2Component', () => {
  let component: Lib4childlib6component2Component;
  let fixture: ComponentFixture<Lib4childlib6component2Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [Lib4childlib6component2Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib4childlib6component2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
