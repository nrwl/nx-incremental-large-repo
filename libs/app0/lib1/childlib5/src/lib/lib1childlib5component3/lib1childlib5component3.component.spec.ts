import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1childlib5component3Component } from './lib1childlib5component3.component';

describe('Lib1childlib5component3Component', () => {
  let component: Lib1childlib5component3Component;
  let fixture: ComponentFixture<Lib1childlib5component3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib1childlib5component3Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib1childlib5component3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
