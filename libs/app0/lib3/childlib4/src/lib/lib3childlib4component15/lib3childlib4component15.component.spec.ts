import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { Lib3childlib4component15Component } from './lib3childlib4component15.component';

describe('Lib3childlib4component15Component', () => {
  let component: Lib3childlib4component15Component;
  let fixture: ComponentFixture<Lib3childlib4component15Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [Lib3childlib4component15Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib3childlib4component15Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
