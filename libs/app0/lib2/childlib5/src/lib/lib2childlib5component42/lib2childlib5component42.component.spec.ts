import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2childlib5component42Component } from './lib2childlib5component42.component';

describe('Lib2childlib5component42Component', () => {
  let component: Lib2childlib5component42Component;
  let fixture: ComponentFixture<Lib2childlib5component42Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib2childlib5component42Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2childlib5component42Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
