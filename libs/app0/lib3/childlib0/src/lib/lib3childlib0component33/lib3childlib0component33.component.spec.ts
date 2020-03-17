import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib3childlib0component33Component } from './lib3childlib0component33.component';

describe('Lib3childlib0component33Component', () => {
  let component: Lib3childlib0component33Component;
  let fixture: ComponentFixture<Lib3childlib0component33Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib3childlib0component33Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib3childlib0component33Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
