import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib4childlib7component14Component } from './lib4childlib7component14.component';

describe('Lib4childlib7component14Component', () => {
  let component: Lib4childlib7component14Component;
  let fixture: ComponentFixture<Lib4childlib7component14Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib4childlib7component14Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib4childlib7component14Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
