import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2childlib4component24Component } from './lib2childlib4component24.component';

describe('Lib2childlib4component24Component', () => {
  let component: Lib2childlib4component24Component;
  let fixture: ComponentFixture<Lib2childlib4component24Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib2childlib4component24Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2childlib4component24Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
