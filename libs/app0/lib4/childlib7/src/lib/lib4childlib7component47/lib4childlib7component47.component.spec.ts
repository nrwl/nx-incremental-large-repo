import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib4childlib7component47Component } from './lib4childlib7component47.component';

describe('Lib4childlib7component47Component', () => {
  let component: Lib4childlib7component47Component;
  let fixture: ComponentFixture<Lib4childlib7component47Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib4childlib7component47Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib4childlib7component47Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
