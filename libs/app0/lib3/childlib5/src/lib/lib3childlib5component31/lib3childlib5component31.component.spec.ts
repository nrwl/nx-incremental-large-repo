import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib3childlib5component31Component } from './lib3childlib5component31.component';

describe('Lib3childlib5component31Component', () => {
  let component: Lib3childlib5component31Component;
  let fixture: ComponentFixture<Lib3childlib5component31Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib3childlib5component31Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib3childlib5component31Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
