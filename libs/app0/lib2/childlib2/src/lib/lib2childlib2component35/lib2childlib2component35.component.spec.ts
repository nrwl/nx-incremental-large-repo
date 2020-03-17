import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2childlib2component35Component } from './lib2childlib2component35.component';

describe('Lib2childlib2component35Component', () => {
  let component: Lib2childlib2component35Component;
  let fixture: ComponentFixture<Lib2childlib2component35Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib2childlib2component35Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2childlib2component35Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
