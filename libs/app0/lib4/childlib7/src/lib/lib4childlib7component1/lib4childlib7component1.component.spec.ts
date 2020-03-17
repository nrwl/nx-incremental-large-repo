import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib4childlib7component1Component } from './lib4childlib7component1.component';

describe('Lib4childlib7component1Component', () => {
  let component: Lib4childlib7component1Component;
  let fixture: ComponentFixture<Lib4childlib7component1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib4childlib7component1Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib4childlib7component1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
