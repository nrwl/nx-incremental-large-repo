import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2childlib4component26Component } from './lib2childlib4component26.component';

describe('Lib2childlib4component26Component', () => {
  let component: Lib2childlib4component26Component;
  let fixture: ComponentFixture<Lib2childlib4component26Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib2childlib4component26Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2childlib4component26Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
