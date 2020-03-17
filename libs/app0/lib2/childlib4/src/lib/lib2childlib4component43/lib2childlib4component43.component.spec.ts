import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2childlib4component43Component } from './lib2childlib4component43.component';

describe('Lib2childlib4component43Component', () => {
  let component: Lib2childlib4component43Component;
  let fixture: ComponentFixture<Lib2childlib4component43Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib2childlib4component43Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2childlib4component43Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
