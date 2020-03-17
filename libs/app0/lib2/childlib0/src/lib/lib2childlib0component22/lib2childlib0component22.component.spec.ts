import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2childlib0component22Component } from './lib2childlib0component22.component';

describe('Lib2childlib0component22Component', () => {
  let component: Lib2childlib0component22Component;
  let fixture: ComponentFixture<Lib2childlib0component22Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib2childlib0component22Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2childlib0component22Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
