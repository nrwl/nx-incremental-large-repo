import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib3childlib9component22Component } from './lib3childlib9component22.component';

describe('Lib3childlib9component22Component', () => {
  let component: Lib3childlib9component22Component;
  let fixture: ComponentFixture<Lib3childlib9component22Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib3childlib9component22Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib3childlib9component22Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
