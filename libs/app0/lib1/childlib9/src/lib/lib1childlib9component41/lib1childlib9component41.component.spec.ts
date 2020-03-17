import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1childlib9component41Component } from './lib1childlib9component41.component';

describe('Lib1childlib9component41Component', () => {
  let component: Lib1childlib9component41Component;
  let fixture: ComponentFixture<Lib1childlib9component41Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib1childlib9component41Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1childlib9component41Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
