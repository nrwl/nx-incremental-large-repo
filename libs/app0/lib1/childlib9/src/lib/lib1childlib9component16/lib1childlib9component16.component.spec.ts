import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1childlib9component16Component } from './lib1childlib9component16.component';

describe('Lib1childlib9component16Component', () => {
  let component: Lib1childlib9component16Component;
  let fixture: ComponentFixture<Lib1childlib9component16Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib1childlib9component16Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1childlib9component16Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
