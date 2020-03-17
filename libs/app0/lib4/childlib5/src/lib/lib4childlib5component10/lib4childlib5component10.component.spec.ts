import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib4childlib5component10Component } from './lib4childlib5component10.component';

describe('Lib4childlib5component10Component', () => {
  let component: Lib4childlib5component10Component;
  let fixture: ComponentFixture<Lib4childlib5component10Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib4childlib5component10Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib4childlib5component10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
