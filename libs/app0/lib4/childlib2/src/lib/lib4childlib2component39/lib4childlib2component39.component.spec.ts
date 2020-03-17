import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib4childlib2component39Component } from './lib4childlib2component39.component';

describe('Lib4childlib2component39Component', () => {
  let component: Lib4childlib2component39Component;
  let fixture: ComponentFixture<Lib4childlib2component39Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib4childlib2component39Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib4childlib2component39Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
