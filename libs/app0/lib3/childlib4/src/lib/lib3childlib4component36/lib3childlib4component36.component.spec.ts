import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib3childlib4component36Component } from './lib3childlib4component36.component';

describe('Lib3childlib4component36Component', () => {
  let component: Lib3childlib4component36Component;
  let fixture: ComponentFixture<Lib3childlib4component36Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib3childlib4component36Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib3childlib4component36Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
