import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2childlib7component5Component } from './lib2childlib7component5.component';

describe('Lib2childlib7component5Component', () => {
  let component: Lib2childlib7component5Component;
  let fixture: ComponentFixture<Lib2childlib7component5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib2childlib7component5Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2childlib7component5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
