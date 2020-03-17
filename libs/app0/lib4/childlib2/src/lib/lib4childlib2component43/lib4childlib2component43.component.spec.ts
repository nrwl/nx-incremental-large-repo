import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib4childlib2component43Component } from './lib4childlib2component43.component';

describe('Lib4childlib2component43Component', () => {
  let component: Lib4childlib2component43Component;
  let fixture: ComponentFixture<Lib4childlib2component43Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib4childlib2component43Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib4childlib2component43Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
