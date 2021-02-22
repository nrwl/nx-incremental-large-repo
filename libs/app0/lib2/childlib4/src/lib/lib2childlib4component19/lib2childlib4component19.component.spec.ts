import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { Lib2childlib4component19Component } from './lib2childlib4component19.component';

describe('Lib2childlib4component19Component', () => {
  let component: Lib2childlib4component19Component;
  let fixture: ComponentFixture<Lib2childlib4component19Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [Lib2childlib4component19Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2childlib4component19Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
