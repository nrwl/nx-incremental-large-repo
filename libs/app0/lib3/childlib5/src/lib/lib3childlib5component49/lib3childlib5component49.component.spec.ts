import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib3childlib5component49Component } from './lib3childlib5component49.component';

describe('Lib3childlib5component49Component', () => {
  let component: Lib3childlib5component49Component;
  let fixture: ComponentFixture<Lib3childlib5component49Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib3childlib5component49Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib3childlib5component49Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
