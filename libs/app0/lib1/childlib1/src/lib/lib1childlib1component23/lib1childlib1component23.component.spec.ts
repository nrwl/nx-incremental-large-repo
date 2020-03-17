import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1childlib1component23Component } from './lib1childlib1component23.component';

describe('Lib1childlib1component23Component', () => {
  let component: Lib1childlib1component23Component;
  let fixture: ComponentFixture<Lib1childlib1component23Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib1childlib1component23Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1childlib1component23Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
