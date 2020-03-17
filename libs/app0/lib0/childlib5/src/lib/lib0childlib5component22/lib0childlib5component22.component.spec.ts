import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0childlib5component22Component } from './lib0childlib5component22.component';

describe('Lib0childlib5component22Component', () => {
  let component: Lib0childlib5component22Component;
  let fixture: ComponentFixture<Lib0childlib5component22Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib0childlib5component22Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0childlib5component22Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
