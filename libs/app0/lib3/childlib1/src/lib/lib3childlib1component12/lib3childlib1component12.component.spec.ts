import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { Lib3childlib1component12Component } from './lib3childlib1component12.component';

describe('Lib3childlib1component12Component', () => {
  let component: Lib3childlib1component12Component;
  let fixture: ComponentFixture<Lib3childlib1component12Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [Lib3childlib1component12Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib3childlib1component12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
