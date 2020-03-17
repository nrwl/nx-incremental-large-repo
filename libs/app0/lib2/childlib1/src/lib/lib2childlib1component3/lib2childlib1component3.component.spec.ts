import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib2childlib1component3Component } from './lib2childlib1component3.component';

describe('Lib2childlib1component3Component', () => {
  let component: Lib2childlib1component3Component;
  let fixture: ComponentFixture<Lib2childlib1component3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [Lib2childlib1component3Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2childlib1component3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
