import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1childlib1component30Component } from './lib1childlib1component30.component';

describe('Lib1childlib1component30Component', () => {
  let component: Lib1childlib1component30Component;
  let fixture: ComponentFixture<Lib1childlib1component30Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib1childlib1component30Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1childlib1component30Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
