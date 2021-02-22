import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { Lib3childlib5component5Component } from './lib3childlib5component5.component';

describe('Lib3childlib5component5Component', () => {
  let component: Lib3childlib5component5Component;
  let fixture: ComponentFixture<Lib3childlib5component5Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [Lib3childlib5component5Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib3childlib5component5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
