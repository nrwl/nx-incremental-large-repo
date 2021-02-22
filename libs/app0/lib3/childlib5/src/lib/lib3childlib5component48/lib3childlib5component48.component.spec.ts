import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { Lib3childlib5component48Component } from './lib3childlib5component48.component';

describe('Lib3childlib5component48Component', () => {
  let component: Lib3childlib5component48Component;
  let fixture: ComponentFixture<Lib3childlib5component48Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [Lib3childlib5component48Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib3childlib5component48Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
