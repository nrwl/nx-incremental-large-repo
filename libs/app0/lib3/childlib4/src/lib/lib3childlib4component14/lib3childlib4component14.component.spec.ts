import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { Lib3childlib4component14Component } from './lib3childlib4component14.component';

describe('Lib3childlib4component14Component', () => {
  let component: Lib3childlib4component14Component;
  let fixture: ComponentFixture<Lib3childlib4component14Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [Lib3childlib4component14Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib3childlib4component14Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
