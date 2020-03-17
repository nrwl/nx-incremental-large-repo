import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib4childlib1component30Component } from './lib4childlib1component30.component';

describe('Lib4childlib1component30Component', () => {
  let component: Lib4childlib1component30Component;
  let fixture: ComponentFixture<Lib4childlib1component30Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib4childlib1component30Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib4childlib1component30Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
