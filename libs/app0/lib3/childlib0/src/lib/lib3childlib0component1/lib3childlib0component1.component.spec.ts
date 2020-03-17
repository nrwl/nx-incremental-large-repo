import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib3childlib0component1Component } from './lib3childlib0component1.component';

describe('Lib3childlib0component1Component', () => {
  let component: Lib3childlib0component1Component;
  let fixture: ComponentFixture<Lib3childlib0component1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib3childlib0component1Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib3childlib0component1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
