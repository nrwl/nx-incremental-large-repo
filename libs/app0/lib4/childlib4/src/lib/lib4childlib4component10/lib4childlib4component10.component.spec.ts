import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib4childlib4component10Component } from './lib4childlib4component10.component';

describe('Lib4childlib4component10Component', () => {
  let component: Lib4childlib4component10Component;
  let fixture: ComponentFixture<Lib4childlib4component10Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib4childlib4component10Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib4childlib4component10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
