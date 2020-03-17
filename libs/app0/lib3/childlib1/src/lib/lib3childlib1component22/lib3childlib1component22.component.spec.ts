import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib3childlib1component22Component } from './lib3childlib1component22.component';

describe('Lib3childlib1component22Component', () => {
  let component: Lib3childlib1component22Component;
  let fixture: ComponentFixture<Lib3childlib1component22Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib3childlib1component22Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib3childlib1component22Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
