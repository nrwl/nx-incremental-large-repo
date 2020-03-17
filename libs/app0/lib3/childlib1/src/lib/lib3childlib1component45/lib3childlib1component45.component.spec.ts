import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib3childlib1component45Component } from './lib3childlib1component45.component';

describe('Lib3childlib1component45Component', () => {
  let component: Lib3childlib1component45Component;
  let fixture: ComponentFixture<Lib3childlib1component45Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib3childlib1component45Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib3childlib1component45Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
