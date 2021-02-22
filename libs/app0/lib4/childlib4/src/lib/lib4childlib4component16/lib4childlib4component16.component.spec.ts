import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { Lib4childlib4component16Component } from './lib4childlib4component16.component';

describe('Lib4childlib4component16Component', () => {
  let component: Lib4childlib4component16Component;
  let fixture: ComponentFixture<Lib4childlib4component16Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [Lib4childlib4component16Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib4childlib4component16Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
