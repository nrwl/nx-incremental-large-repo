import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { Lib4childlib2component13Component } from './lib4childlib2component13.component';

describe('Lib4childlib2component13Component', () => {
  let component: Lib4childlib2component13Component;
  let fixture: ComponentFixture<Lib4childlib2component13Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [Lib4childlib2component13Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib4childlib2component13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
