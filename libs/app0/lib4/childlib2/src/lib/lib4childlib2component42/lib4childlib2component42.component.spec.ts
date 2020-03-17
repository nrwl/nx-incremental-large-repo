import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib4childlib2component42Component } from './lib4childlib2component42.component';

describe('Lib4childlib2component42Component', () => {
  let component: Lib4childlib2component42Component;
  let fixture: ComponentFixture<Lib4childlib2component42Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib4childlib2component42Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib4childlib2component42Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
