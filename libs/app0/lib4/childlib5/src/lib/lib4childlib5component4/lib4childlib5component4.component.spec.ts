import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib4childlib5component4Component } from './lib4childlib5component4.component';

describe('Lib4childlib5component4Component', () => {
  let component: Lib4childlib5component4Component;
  let fixture: ComponentFixture<Lib4childlib5component4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib4childlib5component4Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib4childlib5component4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
