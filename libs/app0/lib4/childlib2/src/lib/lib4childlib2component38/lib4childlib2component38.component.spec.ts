import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib4childlib2component38Component } from './lib4childlib2component38.component';

describe('Lib4childlib2component38Component', () => {
  let component: Lib4childlib2component38Component;
  let fixture: ComponentFixture<Lib4childlib2component38Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib4childlib2component38Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib4childlib2component38Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
