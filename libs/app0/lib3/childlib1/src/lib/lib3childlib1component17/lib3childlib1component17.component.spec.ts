import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { Lib3childlib1component17Component } from './lib3childlib1component17.component';

describe('Lib3childlib1component17Component', () => {
  let component: Lib3childlib1component17Component;
  let fixture: ComponentFixture<Lib3childlib1component17Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [Lib3childlib1component17Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib3childlib1component17Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
