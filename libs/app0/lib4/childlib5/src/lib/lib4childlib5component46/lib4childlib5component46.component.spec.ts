import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { Lib4childlib5component46Component } from './lib4childlib5component46.component';

describe('Lib4childlib5component46Component', () => {
  let component: Lib4childlib5component46Component;
  let fixture: ComponentFixture<Lib4childlib5component46Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [Lib4childlib5component46Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib4childlib5component46Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
