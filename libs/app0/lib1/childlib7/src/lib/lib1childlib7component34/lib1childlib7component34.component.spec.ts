import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1childlib7component34Component } from './lib1childlib7component34.component';

describe('Lib1childlib7component34Component', () => {
  let component: Lib1childlib7component34Component;
  let fixture: ComponentFixture<Lib1childlib7component34Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib1childlib7component34Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1childlib7component34Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
