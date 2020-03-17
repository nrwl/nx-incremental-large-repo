import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2childlib7component2Component } from './lib2childlib7component2.component';

describe('Lib2childlib7component2Component', () => {
  let component: Lib2childlib7component2Component;
  let fixture: ComponentFixture<Lib2childlib7component2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib2childlib7component2Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2childlib7component2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
