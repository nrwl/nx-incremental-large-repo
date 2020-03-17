import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1childlib1component26Component } from './lib1childlib1component26.component';

describe('Lib1childlib1component26Component', () => {
  let component: Lib1childlib1component26Component;
  let fixture: ComponentFixture<Lib1childlib1component26Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib1childlib1component26Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1childlib1component26Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
