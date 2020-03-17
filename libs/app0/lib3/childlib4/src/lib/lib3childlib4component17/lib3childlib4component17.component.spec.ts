import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib3childlib4component17Component } from './lib3childlib4component17.component';

describe('Lib3childlib4component17Component', () => {
  let component: Lib3childlib4component17Component;
  let fixture: ComponentFixture<Lib3childlib4component17Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib3childlib4component17Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib3childlib4component17Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
