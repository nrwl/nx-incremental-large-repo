import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { Lib3childlib4component21Component } from './lib3childlib4component21.component';

describe('Lib3childlib4component21Component', () => {
  let component: Lib3childlib4component21Component;
  let fixture: ComponentFixture<Lib3childlib4component21Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [Lib3childlib4component21Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib3childlib4component21Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
