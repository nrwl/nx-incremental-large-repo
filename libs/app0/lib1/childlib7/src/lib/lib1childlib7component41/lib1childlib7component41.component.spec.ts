import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1childlib7component41Component } from './lib1childlib7component41.component';

describe('Lib1childlib7component41Component', () => {
  let component: Lib1childlib7component41Component;
  let fixture: ComponentFixture<Lib1childlib7component41Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib1childlib7component41Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1childlib7component41Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
