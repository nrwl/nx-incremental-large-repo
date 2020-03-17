import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib4childlib5component26Component } from './lib4childlib5component26.component';

describe('Lib4childlib5component26Component', () => {
  let component: Lib4childlib5component26Component;
  let fixture: ComponentFixture<Lib4childlib5component26Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib4childlib5component26Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib4childlib5component26Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
