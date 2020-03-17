import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib3childlib4component43Component } from './lib3childlib4component43.component';

describe('Lib3childlib4component43Component', () => {
  let component: Lib3childlib4component43Component;
  let fixture: ComponentFixture<Lib3childlib4component43Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib3childlib4component43Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib3childlib4component43Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
