import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib3childlib0component17Component } from './lib3childlib0component17.component';

describe('Lib3childlib0component17Component', () => {
  let component: Lib3childlib0component17Component;
  let fixture: ComponentFixture<Lib3childlib0component17Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib3childlib0component17Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib3childlib0component17Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
