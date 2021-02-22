import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { Lib4childlib5component41Component } from './lib4childlib5component41.component';

describe('Lib4childlib5component41Component', () => {
  let component: Lib4childlib5component41Component;
  let fixture: ComponentFixture<Lib4childlib5component41Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [Lib4childlib5component41Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib4childlib5component41Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
