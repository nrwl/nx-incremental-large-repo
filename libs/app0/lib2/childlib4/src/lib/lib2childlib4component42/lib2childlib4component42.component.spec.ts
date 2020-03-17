import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2childlib4component42Component } from './lib2childlib4component42.component';

describe('Lib2childlib4component42Component', () => {
  let component: Lib2childlib4component42Component;
  let fixture: ComponentFixture<Lib2childlib4component42Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib2childlib4component42Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2childlib4component42Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
