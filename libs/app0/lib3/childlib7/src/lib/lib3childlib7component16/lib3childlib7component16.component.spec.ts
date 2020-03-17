import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib3childlib7component16Component } from './lib3childlib7component16.component';

describe('Lib3childlib7component16Component', () => {
  let component: Lib3childlib7component16Component;
  let fixture: ComponentFixture<Lib3childlib7component16Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib3childlib7component16Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib3childlib7component16Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
