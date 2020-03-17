import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib3childlib5component47Component } from './lib3childlib5component47.component';

describe('Lib3childlib5component47Component', () => {
  let component: Lib3childlib5component47Component;
  let fixture: ComponentFixture<Lib3childlib5component47Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib3childlib5component47Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib3childlib5component47Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
