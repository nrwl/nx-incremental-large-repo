import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2childlib5component23Component } from './lib2childlib5component23.component';

describe('Lib2childlib5component23Component', () => {
  let component: Lib2childlib5component23Component;
  let fixture: ComponentFixture<Lib2childlib5component23Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib2childlib5component23Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2childlib5component23Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
