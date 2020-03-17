import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib4childlib7component8Component } from './lib4childlib7component8.component';

describe('Lib4childlib7component8Component', () => {
  let component: Lib4childlib7component8Component;
  let fixture: ComponentFixture<Lib4childlib7component8Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib4childlib7component8Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib4childlib7component8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
