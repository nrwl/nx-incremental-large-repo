import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1childlib9component44Component } from './lib1childlib9component44.component';

describe('Lib1childlib9component44Component', () => {
  let component: Lib1childlib9component44Component;
  let fixture: ComponentFixture<Lib1childlib9component44Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib1childlib9component44Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1childlib9component44Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
