import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib4childlib2component34Component } from './lib4childlib2component34.component';

describe('Lib4childlib2component34Component', () => {
  let component: Lib4childlib2component34Component;
  let fixture: ComponentFixture<Lib4childlib2component34Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib4childlib2component34Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib4childlib2component34Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
