import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2childlib0component25Component } from './lib2childlib0component25.component';

describe('Lib2childlib0component25Component', () => {
  let component: Lib2childlib0component25Component;
  let fixture: ComponentFixture<Lib2childlib0component25Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib2childlib0component25Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2childlib0component25Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
