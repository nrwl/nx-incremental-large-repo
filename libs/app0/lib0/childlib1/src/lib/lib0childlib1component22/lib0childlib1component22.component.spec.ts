import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib0childlib1component22Component } from './lib0childlib1component22.component';

describe('Lib0childlib1component22Component', () => {
  let component: Lib0childlib1component22Component;
  let fixture: ComponentFixture<Lib0childlib1component22Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib0childlib1component22Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib0childlib1component22Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
