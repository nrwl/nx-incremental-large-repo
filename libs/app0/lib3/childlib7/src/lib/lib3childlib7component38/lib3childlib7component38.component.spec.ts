import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib3childlib7component38Component } from './lib3childlib7component38.component';

describe('Lib3childlib7component38Component', () => {
  let component: Lib3childlib7component38Component;
  let fixture: ComponentFixture<Lib3childlib7component38Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib3childlib7component38Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib3childlib7component38Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
