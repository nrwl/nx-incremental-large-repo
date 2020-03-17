import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib3childlib7component18Component } from './lib3childlib7component18.component';

describe('Lib3childlib7component18Component', () => {
  let component: Lib3childlib7component18Component;
  let fixture: ComponentFixture<Lib3childlib7component18Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib3childlib7component18Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib3childlib7component18Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
