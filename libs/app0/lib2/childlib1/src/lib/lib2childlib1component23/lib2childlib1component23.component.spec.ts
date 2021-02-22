import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { Lib2childlib1component23Component } from './lib2childlib1component23.component';

describe('Lib2childlib1component23Component', () => {
  let component: Lib2childlib1component23Component;
  let fixture: ComponentFixture<Lib2childlib1component23Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [Lib2childlib1component23Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2childlib1component23Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
