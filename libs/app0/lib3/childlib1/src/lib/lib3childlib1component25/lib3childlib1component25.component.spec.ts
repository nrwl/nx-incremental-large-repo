import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { Lib3childlib1component25Component } from './lib3childlib1component25.component';

describe('Lib3childlib1component25Component', () => {
  let component: Lib3childlib1component25Component;
  let fixture: ComponentFixture<Lib3childlib1component25Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [Lib3childlib1component25Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib3childlib1component25Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
