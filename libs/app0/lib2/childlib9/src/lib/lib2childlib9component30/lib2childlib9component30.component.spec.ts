import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2childlib9component30Component } from './lib2childlib9component30.component';

describe('Lib2childlib9component30Component', () => {
  let component: Lib2childlib9component30Component;
  let fixture: ComponentFixture<Lib2childlib9component30Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib2childlib9component30Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2childlib9component30Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
