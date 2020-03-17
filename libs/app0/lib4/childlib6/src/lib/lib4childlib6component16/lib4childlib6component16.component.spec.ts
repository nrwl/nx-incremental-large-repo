import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib4childlib6component16Component } from './lib4childlib6component16.component';

describe('Lib4childlib6component16Component', () => {
  let component: Lib4childlib6component16Component;
  let fixture: ComponentFixture<Lib4childlib6component16Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib4childlib6component16Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib4childlib6component16Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
