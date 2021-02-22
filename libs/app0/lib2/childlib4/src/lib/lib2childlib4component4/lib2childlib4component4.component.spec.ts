import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { Lib2childlib4component4Component } from './lib2childlib4component4.component';

describe('Lib2childlib4component4Component', () => {
  let component: Lib2childlib4component4Component;
  let fixture: ComponentFixture<Lib2childlib4component4Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [Lib2childlib4component4Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2childlib4component4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
