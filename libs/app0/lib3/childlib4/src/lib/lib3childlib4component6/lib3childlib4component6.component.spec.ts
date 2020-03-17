import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib3childlib4component6Component } from './lib3childlib4component6.component';

describe('Lib3childlib4component6Component', () => {
  let component: Lib3childlib4component6Component;
  let fixture: ComponentFixture<Lib3childlib4component6Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib3childlib4component6Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib3childlib4component6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
