import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib3childlib0component6Component } from './lib3childlib0component6.component';

describe('Lib3childlib0component6Component', () => {
  let component: Lib3childlib0component6Component;
  let fixture: ComponentFixture<Lib3childlib0component6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib3childlib0component6Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib3childlib0component6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
