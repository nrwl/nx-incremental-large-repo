import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2childlib0component43Component } from './lib2childlib0component43.component';

describe('Lib2childlib0component43Component', () => {
  let component: Lib2childlib0component43Component;
  let fixture: ComponentFixture<Lib2childlib0component43Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib2childlib0component43Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2childlib0component43Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
