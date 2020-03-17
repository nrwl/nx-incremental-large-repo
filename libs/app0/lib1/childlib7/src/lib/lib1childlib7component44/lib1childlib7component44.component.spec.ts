import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1childlib7component44Component } from './lib1childlib7component44.component';

describe('Lib1childlib7component44Component', () => {
  let component: Lib1childlib7component44Component;
  let fixture: ComponentFixture<Lib1childlib7component44Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib1childlib7component44Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1childlib7component44Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
