import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { Lib2childlib4component40Component } from './lib2childlib4component40.component';

describe('Lib2childlib4component40Component', () => {
  let component: Lib2childlib4component40Component;
  let fixture: ComponentFixture<Lib2childlib4component40Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [Lib2childlib4component40Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2childlib4component40Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
