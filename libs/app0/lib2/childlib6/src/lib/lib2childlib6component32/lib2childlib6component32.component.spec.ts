import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2childlib6component32Component } from './lib2childlib6component32.component';

describe('Lib2childlib6component32Component', () => {
  let component: Lib2childlib6component32Component;
  let fixture: ComponentFixture<Lib2childlib6component32Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib2childlib6component32Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2childlib6component32Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
