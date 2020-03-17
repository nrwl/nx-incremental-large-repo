import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib4childlib7component26Component } from './lib4childlib7component26.component';

describe('Lib4childlib7component26Component', () => {
  let component: Lib4childlib7component26Component;
  let fixture: ComponentFixture<Lib4childlib7component26Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib4childlib7component26Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib4childlib7component26Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
