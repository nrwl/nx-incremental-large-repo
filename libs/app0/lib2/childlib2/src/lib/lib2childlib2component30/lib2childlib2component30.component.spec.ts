import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2childlib2component30Component } from './lib2childlib2component30.component';

describe('Lib2childlib2component30Component', () => {
  let component: Lib2childlib2component30Component;
  let fixture: ComponentFixture<Lib2childlib2component30Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib2childlib2component30Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2childlib2component30Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
