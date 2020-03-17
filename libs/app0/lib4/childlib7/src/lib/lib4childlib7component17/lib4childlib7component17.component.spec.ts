import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib4childlib7component17Component } from './lib4childlib7component17.component';

describe('Lib4childlib7component17Component', () => {
  let component: Lib4childlib7component17Component;
  let fixture: ComponentFixture<Lib4childlib7component17Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib4childlib7component17Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib4childlib7component17Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
