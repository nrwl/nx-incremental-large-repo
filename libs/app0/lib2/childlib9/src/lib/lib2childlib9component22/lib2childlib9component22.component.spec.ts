import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2childlib9component22Component } from './lib2childlib9component22.component';

describe('Lib2childlib9component22Component', () => {
  let component: Lib2childlib9component22Component;
  let fixture: ComponentFixture<Lib2childlib9component22Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib2childlib9component22Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2childlib9component22Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
