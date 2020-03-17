import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib4childlib4component4Component } from './lib4childlib4component4.component';

describe('Lib4childlib4component4Component', () => {
  let component: Lib4childlib4component4Component;
  let fixture: ComponentFixture<Lib4childlib4component4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib4childlib4component4Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib4childlib4component4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
