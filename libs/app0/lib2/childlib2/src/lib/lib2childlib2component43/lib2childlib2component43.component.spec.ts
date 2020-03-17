import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2childlib2component43Component } from './lib2childlib2component43.component';

describe('Lib2childlib2component43Component', () => {
  let component: Lib2childlib2component43Component;
  let fixture: ComponentFixture<Lib2childlib2component43Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib2childlib2component43Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2childlib2component43Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
