import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2childlib6component8Component } from './lib2childlib6component8.component';

describe('Lib2childlib6component8Component', () => {
  let component: Lib2childlib6component8Component;
  let fixture: ComponentFixture<Lib2childlib6component8Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib2childlib6component8Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2childlib6component8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
