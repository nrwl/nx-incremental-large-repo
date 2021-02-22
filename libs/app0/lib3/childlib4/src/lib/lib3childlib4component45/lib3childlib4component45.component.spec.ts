import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { Lib3childlib4component45Component } from './lib3childlib4component45.component';

describe('Lib3childlib4component45Component', () => {
  let component: Lib3childlib4component45Component;
  let fixture: ComponentFixture<Lib3childlib4component45Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [Lib3childlib4component45Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib3childlib4component45Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
