import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib4childlib2component2Component } from './lib4childlib2component2.component';

describe('Lib4childlib2component2Component', () => {
  let component: Lib4childlib2component2Component;
  let fixture: ComponentFixture<Lib4childlib2component2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib4childlib2component2Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib4childlib2component2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
