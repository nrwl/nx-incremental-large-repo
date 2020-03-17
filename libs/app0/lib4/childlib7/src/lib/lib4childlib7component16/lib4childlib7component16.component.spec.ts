import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib4childlib7component16Component } from './lib4childlib7component16.component';

describe('Lib4childlib7component16Component', () => {
  let component: Lib4childlib7component16Component;
  let fixture: ComponentFixture<Lib4childlib7component16Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib4childlib7component16Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib4childlib7component16Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
