import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib3childlib1component43Component } from './lib3childlib1component43.component';

describe('Lib3childlib1component43Component', () => {
  let component: Lib3childlib1component43Component;
  let fixture: ComponentFixture<Lib3childlib1component43Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib3childlib1component43Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib3childlib1component43Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
