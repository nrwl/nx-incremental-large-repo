import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1childlib7component47Component } from './lib1childlib7component47.component';

describe('Lib1childlib7component47Component', () => {
  let component: Lib1childlib7component47Component;
  let fixture: ComponentFixture<Lib1childlib7component47Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib1childlib7component47Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1childlib7component47Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
