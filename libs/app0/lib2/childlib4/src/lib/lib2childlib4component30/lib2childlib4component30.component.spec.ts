import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2childlib4component30Component } from './lib2childlib4component30.component';

describe('Lib2childlib4component30Component', () => {
  let component: Lib2childlib4component30Component;
  let fixture: ComponentFixture<Lib2childlib4component30Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib2childlib4component30Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2childlib4component30Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
