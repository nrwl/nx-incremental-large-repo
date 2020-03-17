import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib3childlib2component36Component } from './lib3childlib2component36.component';

describe('Lib3childlib2component36Component', () => {
  let component: Lib3childlib2component36Component;
  let fixture: ComponentFixture<Lib3childlib2component36Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib3childlib2component36Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib3childlib2component36Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
