import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { Lib3childlib3component45Component } from './lib3childlib3component45.component';

describe('Lib3childlib3component45Component', () => {
  let component: Lib3childlib3component45Component;
  let fixture: ComponentFixture<Lib3childlib3component45Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [Lib3childlib3component45Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib3childlib3component45Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
