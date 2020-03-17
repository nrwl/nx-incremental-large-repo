import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib4childlib2component46Component } from './lib4childlib2component46.component';

describe('Lib4childlib2component46Component', () => {
  let component: Lib4childlib2component46Component;
  let fixture: ComponentFixture<Lib4childlib2component46Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib4childlib2component46Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib4childlib2component46Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
