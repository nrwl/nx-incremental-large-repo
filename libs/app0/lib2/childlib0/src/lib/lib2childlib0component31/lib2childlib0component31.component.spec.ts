import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { Lib2childlib0component31Component } from './lib2childlib0component31.component';

describe('Lib2childlib0component31Component', () => {
  let component: Lib2childlib0component31Component;
  let fixture: ComponentFixture<Lib2childlib0component31Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [Lib2childlib0component31Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2childlib0component31Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
