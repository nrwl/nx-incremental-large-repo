import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib3childlib5component8Component } from './lib3childlib5component8.component';

describe('Lib3childlib5component8Component', () => {
  let component: Lib3childlib5component8Component;
  let fixture: ComponentFixture<Lib3childlib5component8Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib3childlib5component8Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib3childlib5component8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
