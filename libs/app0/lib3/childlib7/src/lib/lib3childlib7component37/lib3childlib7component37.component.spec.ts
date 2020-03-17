import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib3childlib7component37Component } from './lib3childlib7component37.component';

describe('Lib3childlib7component37Component', () => {
  let component: Lib3childlib7component37Component;
  let fixture: ComponentFixture<Lib3childlib7component37Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib3childlib7component37Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib3childlib7component37Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
