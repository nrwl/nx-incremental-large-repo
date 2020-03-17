import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib4childlib7component6Component } from './lib4childlib7component6.component';

describe('Lib4childlib7component6Component', () => {
  let component: Lib4childlib7component6Component;
  let fixture: ComponentFixture<Lib4childlib7component6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib4childlib7component6Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib4childlib7component6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
