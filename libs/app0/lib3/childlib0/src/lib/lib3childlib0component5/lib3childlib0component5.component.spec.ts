import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib3childlib0component5Component } from './lib3childlib0component5.component';

describe('Lib3childlib0component5Component', () => {
  let component: Lib3childlib0component5Component;
  let fixture: ComponentFixture<Lib3childlib0component5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib3childlib0component5Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib3childlib0component5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
