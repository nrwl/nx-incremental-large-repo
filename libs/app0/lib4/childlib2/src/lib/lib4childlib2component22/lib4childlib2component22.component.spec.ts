import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib4childlib2component22Component } from './lib4childlib2component22.component';

describe('Lib4childlib2component22Component', () => {
  let component: Lib4childlib2component22Component;
  let fixture: ComponentFixture<Lib4childlib2component22Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib4childlib2component22Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib4childlib2component22Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
