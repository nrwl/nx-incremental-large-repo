import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { Lib4childlib2component36Component } from './lib4childlib2component36.component';

describe('Lib4childlib2component36Component', () => {
  let component: Lib4childlib2component36Component;
  let fixture: ComponentFixture<Lib4childlib2component36Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [Lib4childlib2component36Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib4childlib2component36Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
