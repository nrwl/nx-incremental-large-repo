import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2childlib5component49Component } from './lib2childlib5component49.component';

describe('Lib2childlib5component49Component', () => {
  let component: Lib2childlib5component49Component;
  let fixture: ComponentFixture<Lib2childlib5component49Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib2childlib5component49Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2childlib5component49Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
