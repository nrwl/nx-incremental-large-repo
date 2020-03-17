import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2childlib6component48Component } from './lib2childlib6component48.component';

describe('Lib2childlib6component48Component', () => {
  let component: Lib2childlib6component48Component;
  let fixture: ComponentFixture<Lib2childlib6component48Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib2childlib6component48Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2childlib6component48Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
