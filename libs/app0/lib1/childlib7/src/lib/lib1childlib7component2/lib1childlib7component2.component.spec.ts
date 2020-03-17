import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1childlib7component2Component } from './lib1childlib7component2.component';

describe('Lib1childlib7component2Component', () => {
  let component: Lib1childlib7component2Component;
  let fixture: ComponentFixture<Lib1childlib7component2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib1childlib7component2Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1childlib7component2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
