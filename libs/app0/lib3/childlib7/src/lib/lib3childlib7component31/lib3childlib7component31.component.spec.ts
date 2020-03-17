import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib3childlib7component31Component } from './lib3childlib7component31.component';

describe('Lib3childlib7component31Component', () => {
  let component: Lib3childlib7component31Component;
  let fixture: ComponentFixture<Lib3childlib7component31Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib3childlib7component31Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib3childlib7component31Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
