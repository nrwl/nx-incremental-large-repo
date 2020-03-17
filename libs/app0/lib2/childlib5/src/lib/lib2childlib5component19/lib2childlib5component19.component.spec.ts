import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2childlib5component19Component } from './lib2childlib5component19.component';

describe('Lib2childlib5component19Component', () => {
  let component: Lib2childlib5component19Component;
  let fixture: ComponentFixture<Lib2childlib5component19Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib2childlib5component19Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2childlib5component19Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
