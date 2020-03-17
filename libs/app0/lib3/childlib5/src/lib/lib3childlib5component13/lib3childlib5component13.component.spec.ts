import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib3childlib5component13Component } from './lib3childlib5component13.component';

describe('Lib3childlib5component13Component', () => {
  let component: Lib3childlib5component13Component;
  let fixture: ComponentFixture<Lib3childlib5component13Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib3childlib5component13Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib3childlib5component13Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
