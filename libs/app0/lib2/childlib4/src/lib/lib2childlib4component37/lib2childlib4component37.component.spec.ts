import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { Lib2childlib4component37Component } from './lib2childlib4component37.component';

describe('Lib2childlib4component37Component', () => {
  let component: Lib2childlib4component37Component;
  let fixture: ComponentFixture<Lib2childlib4component37Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [Lib2childlib4component37Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2childlib4component37Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
