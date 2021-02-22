import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { Lib4childlib3component30Component } from './lib4childlib3component30.component';

describe('Lib4childlib3component30Component', () => {
  let component: Lib4childlib3component30Component;
  let fixture: ComponentFixture<Lib4childlib3component30Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [Lib4childlib3component30Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib4childlib3component30Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
