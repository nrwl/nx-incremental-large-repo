import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib4childlib7component32Component } from './lib4childlib7component32.component';

describe('Lib4childlib7component32Component', () => {
  let component: Lib4childlib7component32Component;
  let fixture: ComponentFixture<Lib4childlib7component32Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib4childlib7component32Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib4childlib7component32Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
