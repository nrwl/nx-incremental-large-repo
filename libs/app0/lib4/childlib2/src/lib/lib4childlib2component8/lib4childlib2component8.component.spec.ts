import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib4childlib2component8Component } from './lib4childlib2component8.component';

describe('Lib4childlib2component8Component', () => {
  let component: Lib4childlib2component8Component;
  let fixture: ComponentFixture<Lib4childlib2component8Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib4childlib2component8Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib4childlib2component8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
