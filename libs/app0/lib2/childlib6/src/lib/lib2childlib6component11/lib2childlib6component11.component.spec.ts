import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { Lib2childlib6component11Component } from './lib2childlib6component11.component';

describe('Lib2childlib6component11Component', () => {
  let component: Lib2childlib6component11Component;
  let fixture: ComponentFixture<Lib2childlib6component11Component>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [Lib2childlib6component11Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Lib2childlib6component11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
