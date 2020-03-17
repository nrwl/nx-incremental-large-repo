import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1childlib7component40Component } from './lib1childlib7component40.component';

describe('Lib1childlib7component40Component', () => {
  let component: Lib1childlib7component40Component;
  let fixture: ComponentFixture<Lib1childlib7component40Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib1childlib7component40Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1childlib7component40Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
