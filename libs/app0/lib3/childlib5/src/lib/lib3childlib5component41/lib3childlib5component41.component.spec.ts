import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib3childlib5component41Component } from './lib3childlib5component41.component';

describe('Lib3childlib5component41Component', () => {
  let component: Lib3childlib5component41Component;
  let fixture: ComponentFixture<Lib3childlib5component41Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib3childlib5component41Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib3childlib5component41Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
