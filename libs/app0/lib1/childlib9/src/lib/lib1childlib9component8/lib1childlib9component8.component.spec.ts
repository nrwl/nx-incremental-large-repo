import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1childlib9component8Component } from './lib1childlib9component8.component';

describe('Lib1childlib9component8Component', () => {
  let component: Lib1childlib9component8Component;
  let fixture: ComponentFixture<Lib1childlib9component8Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib1childlib9component8Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1childlib9component8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
