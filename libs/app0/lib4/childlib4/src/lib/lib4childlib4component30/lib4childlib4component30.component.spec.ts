import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib4childlib4component30Component } from './lib4childlib4component30.component';

describe('Lib4childlib4component30Component', () => {
  let component: Lib4childlib4component30Component;
  let fixture: ComponentFixture<Lib4childlib4component30Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib4childlib4component30Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib4childlib4component30Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
