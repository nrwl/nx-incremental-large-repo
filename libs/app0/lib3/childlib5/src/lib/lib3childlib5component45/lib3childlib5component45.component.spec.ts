import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib3childlib5component45Component } from './lib3childlib5component45.component';

describe('Lib3childlib5component45Component', () => {
  let component: Lib3childlib5component45Component;
  let fixture: ComponentFixture<Lib3childlib5component45Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib3childlib5component45Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib3childlib5component45Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
