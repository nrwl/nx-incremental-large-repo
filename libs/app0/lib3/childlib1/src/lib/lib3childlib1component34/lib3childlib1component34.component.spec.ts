import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib3childlib1component34Component } from './lib3childlib1component34.component';

describe('Lib3childlib1component34Component', () => {
  let component: Lib3childlib1component34Component;
  let fixture: ComponentFixture<Lib3childlib1component34Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib3childlib1component34Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib3childlib1component34Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
