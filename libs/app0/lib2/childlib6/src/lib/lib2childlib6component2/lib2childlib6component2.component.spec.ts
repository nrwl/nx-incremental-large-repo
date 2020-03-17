import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2childlib6component2Component } from './lib2childlib6component2.component';

describe('Lib2childlib6component2Component', () => {
  let component: Lib2childlib6component2Component;
  let fixture: ComponentFixture<Lib2childlib6component2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib2childlib6component2Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2childlib6component2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
