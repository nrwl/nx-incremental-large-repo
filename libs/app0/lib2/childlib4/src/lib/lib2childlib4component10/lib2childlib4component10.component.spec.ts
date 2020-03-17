import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2childlib4component10Component } from './lib2childlib4component10.component';

describe('Lib2childlib4component10Component', () => {
  let component: Lib2childlib4component10Component;
  let fixture: ComponentFixture<Lib2childlib4component10Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib2childlib4component10Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2childlib4component10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
