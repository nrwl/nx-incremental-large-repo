import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib3childlib7component48Component } from './lib3childlib7component48.component';

describe('Lib3childlib7component48Component', () => {
  let component: Lib3childlib7component48Component;
  let fixture: ComponentFixture<Lib3childlib7component48Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib3childlib7component48Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib3childlib7component48Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
