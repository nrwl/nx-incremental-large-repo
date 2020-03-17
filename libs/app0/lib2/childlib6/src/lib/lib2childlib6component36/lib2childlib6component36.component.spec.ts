import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2childlib6component36Component } from './lib2childlib6component36.component';

describe('Lib2childlib6component36Component', () => {
  let component: Lib2childlib6component36Component;
  let fixture: ComponentFixture<Lib2childlib6component36Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib2childlib6component36Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2childlib6component36Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
