import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { Lib2childlib1component43Component } from './lib2childlib1component43.component';

describe('Lib2childlib1component43Component', () => {
  let component: Lib2childlib1component43Component;
  let fixture: ComponentFixture<Lib2childlib1component43Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [Lib2childlib1component43Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2childlib1component43Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
