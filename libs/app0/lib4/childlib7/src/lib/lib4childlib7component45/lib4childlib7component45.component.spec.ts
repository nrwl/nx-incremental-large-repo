import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib4childlib7component45Component } from './lib4childlib7component45.component';

describe('Lib4childlib7component45Component', () => {
  let component: Lib4childlib7component45Component;
  let fixture: ComponentFixture<Lib4childlib7component45Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib4childlib7component45Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib4childlib7component45Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
