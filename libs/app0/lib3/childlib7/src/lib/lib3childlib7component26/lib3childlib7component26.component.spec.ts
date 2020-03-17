import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib3childlib7component26Component } from './lib3childlib7component26.component';

describe('Lib3childlib7component26Component', () => {
  let component: Lib3childlib7component26Component;
  let fixture: ComponentFixture<Lib3childlib7component26Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib3childlib7component26Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib3childlib7component26Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
