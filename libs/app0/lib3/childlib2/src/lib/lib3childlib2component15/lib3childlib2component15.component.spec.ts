import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib3childlib2component15Component } from './lib3childlib2component15.component';

describe('Lib3childlib2component15Component', () => {
  let component: Lib3childlib2component15Component;
  let fixture: ComponentFixture<Lib3childlib2component15Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib3childlib2component15Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib3childlib2component15Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
